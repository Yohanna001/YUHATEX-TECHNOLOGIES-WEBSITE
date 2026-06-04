import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AiChatbot from "./components/AiChatbot";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Smooth 1.5-second initial intro transition loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fafbfc] text-[#0f172a] overflow-x-hidden select-none selection:bg-blue-600 selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          /* Premium agency branding Page Loader */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -45 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#0B1E36] flex flex-col items-center justify-center text-white"
          >
            <div className="space-y-6 text-center flex flex-col items-center">
              {/* Spinning Logo Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                className="w-14 h-14 rounded-2xl border-2 border-blue-500/20 border-t-blue-500 flex items-center justify-center"
              >
                <Sparkles className="w-5 h-5 text-blue-400" />
              </motion.div>

              <div className="space-y-1.5">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-display font-medium text-xl tracking-widest text-white select-none whitespace-nowrap"
                >
                  YUHATEX
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 0.5 }}
                  className="text-[10px] font-mono tracking-widest uppercase text-blue-300"
                >
                  Premium Web Agency
                </motion.p>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Main App Framework Section */
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Nav Bar sticky overlay */}
            <Navbar />

            {/* Layout Content blocks */}
            <main id="app-main-layout">
              <Hero />
              <About />
              <Services />
              <WhyChooseUs />
              <Portfolio />
              <Process />
              <Testimonials />
              <Contact />
            </main>

            {/* Interactive Chatbot */}
            <AiChatbot />

            {/* General footer quicklinks & copyrights */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
