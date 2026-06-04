import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }

  // API chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array is required." });
      }

      if (!ai) {
        return res.json({
          text: "Hello! I am the Yuhatex Technologies AI Assistant. I can see that the Gemini API key is not currently configured in the environment settings. However, you can chat with me directly, or click the WhatsApp button to chat with our CEO, Yohanna Isaac Emmanuel, at +2347010749941!"
        });
      }

      // Convert messages to Gemini SDK contents format: [{ role: 'user'|'model', parts: [{ text: '...' }] }]
      const contents = messages.map(msg => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }]
      }));

      const systemInstruction = `You are the official AI Assistant for Yuhatex Technologies, a premium, professional web design agency.
Your goal is to answer client questions about our services, guide visitors, and persuade/invite them to connect with us on WhatsApp.

Here is key information about and history of Yuhatex Technologies:
- **Company Name**: Yuhatex Technologies
- **What we do**: We are a premium web design agency. We design fast, modern, and conversion-focused websites that help businesses build credibility, attract customers, and grow online. Only focus on web design, web development, redesigns, and landing pages.
- **Our Target Audience**: Businesses, companies, startups, and individuals who need professional websites or redesigns.
- **Founder & CEO**: YOHANNA ISAAC EMMANUEL.
  - Profile: Passionate about technology and digital innovation, Yohanna founded Yuhatex Technologies to help companies succeed online through elegant website solutions combining modern design, high functionality, and native speed.
- **Services offered (We offer 6 premium services)**:
  1. Business Websites: Professional websites for companies and brands.
  2. Portfolio Websites: Personal and professional portfolios.
  3. Landing Pages: High-converting product/service pages.
  4. Website Redesign: Elevating outdated web layouts.
  5. Responsive Web Design: Highly optimized design for desktop, mobile, & tablet.
  6. Website Maintenance: Lifetime reliable support, upkeep, and system updates.
- **Why Choose Us**: Indeed, we make modern responsive layouts, focus on attention to detail, SEO friendly code structure, fast Google Lighthouse speeds with real-time support.
- **Contact Details**:
  - WhatsApp: +2347010749941 (https://wa.me/2347010749941?text=Hello%20Yuhatex%20Technologies%2C%20I%20am%20interested%20in%20your%20website%20design%20services.)
  - Email: yuhatextechnologies@gmail.com
  - Physical/Operating location: Nigeria (global remote availability for clients worldwide)

Guidelines for your replies:
- Be highly polite, professional, minimalist, and trustworthy. Avoid flashy tones or emojis overkill.
- Do not make up services or projects we don't have.
- Every message should gracefully suggest that for detailed project boarding, pricing, or custom proposals, they can instantly text the CEO on WhatsApp at +2347010749941 (include markdown link to wa.me: https://wa.me/2347010749941?text=Hello%20Yuhatex%20Technologies%2C%20I%20am%20interested%20in%20your%20website%20design%20services.).
- Keep answers relatively concise and highly readable (2-3 sentences where possible).`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      res.status(500).json({ error: "Failed to generate AI response. Please try contacting via WhatsApp!" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
