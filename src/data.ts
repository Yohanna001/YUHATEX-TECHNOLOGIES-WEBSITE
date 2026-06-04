import { ServiceItem, ValueCard, Project, ProcessStep, Testimonial } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Professional, clean, and credible websites custom-designed for companies, agencies, and brands. Crafted to convey premium competence.",
    iconName: "Briefcase",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    description: "Personal and professional portfolio websites designed to showcase your talent, skills, and historic achievements in elegant style.",
    iconName: "User",
    imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "High-converting landing pages built and optimized specifically to capture leads, sell products, or pitch targeted campaigns.",
    iconName: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description: "Transform outdated online presences into fast, modern, and engaging visual experiences utilizing premium technology layouts.",
    iconName: "RefreshCw",
    imageUrl: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "responsive-design",
    title: "Responsive Web Design",
    description: "Websites painstakingly optimized to look gorgeous and function flawlessly across desktop, tablet, and mobile displays.",
    iconName: "Smartphone",
    imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    description: "Ongoing reliable technical support, regular text/visual updates, security checks, and platform stability upkeep.",
    iconName: "Wrench",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
  }
];

export const VALUES_DATA: ValueCard[] = [
  {
    id: "modern-designs",
    title: "Modern Designs",
    description: "Bespoke web aesthetics that embody your brand identity while keeping noise to a minimum. Minimalist, premium, and professional layouts.",
    iconName: "Palette",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "mobile-responsive",
    title: "Mobile Responsive",
    description: "Fluid design adjustments for any viewport size. Every pixel adapts instantly to smartphones, tablets, and wide monitors.",
    iconName: "Smartphone",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fast-loading",
    title: "Fast Loading Speed",
    description: "We optimize all code and images to guarantee rapid load times, elevating user satisfaction and conversion performance.",
    iconName: "Zap",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "seo-friendly",
    title: "SEO-Friendly Structure",
    description: "Clean semantic HTML and optimized metadata blueprints to give your business high visibility across Google search queries.",
    iconName: "Globe",
    imageUrl: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "professional-support",
    title: "Professional Support",
    description: "Dedicated maintenance packages and real-time updates. We are always responsive to your updates and ongoing queries.",
    iconName: "MessageCircle",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "attention-detail",
    title: "Attention to Detail",
    description: "Precision matters. We refine font pairings, margin spaces, subtle shadow depths, and hover flows until they are flawless.",
    iconName: "CheckCircle2",
    imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800"
  }
];

export const PORTFOLIO_DATA: Project[] = [
  {
    id: "project-1",
    title: "Modern Corporate Website",
    category: "Corporate Website",
    description: "A premium business website designed for a global consultancy outfit, crafted with high-contrast sections and subtle entries.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Vite", "Tailwind CSS", "Motion"]
  },
  {
    id: "project-2",
    title: "Business Landing Page",
    category: "Landing Page",
    description: "An elegant, high-converting product landing page optimized specifically for capturing quality corporate leads.",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Motion"]
  },
  {
    id: "project-3",
    title: "Portfolio Website",
    category: "Portfolio Design",
    description: "A sleek, media-rich personal brand portfolio tailored for a premium architect, reflecting pristine spatial and graphic principles.",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Vite", "Tailwind CSS"]
  },
  {
    id: "project-4",
    title: "E-commerce Website",
    category: "E-Commerce",
    description: "A secure, robust, and lightning-fast virtual storefront optimized for high conversion rates and intuitive customer checking.",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Express", "Tailwind CSS", "Payment Proxy"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-1",
    phase: "01",
    name: "Discovery Chat",
    description: "We understand your brand personality, core business goals, target audience, and web styling priorities."
  },
  {
    id: "step-2",
    phase: "02",
    name: "Visual Blueprint",
    description: "We outline an elegant structure and wireframes, focusing on hierarchy, visual trust triggers, and clear call-to-actions."
  },
  {
    id: "step-3",
    phase: "03",
    name: "Pristine Coding",
    description: "We build your website using lightweight, fast-loading, structured code following premium modern industry benchmarks."
  },
  {
    id: "step-4",
    phase: "04",
    name: "Precision QA",
    description: "We comprehensively test responsiveness, browser compatibility, form features, and load times across actual gadgets."
  },
  {
    id: "step-5",
    phase: "05",
    name: "Live Deployment",
    description: "We move your platform live onto your domains, setup SEO indexes, and optimize static assets for high speed."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Henderson",
    role: "Managing Director",
    company: "NexaFlow Logistics",
    review: "The corporate website created by Yuhatex Technologies elevated our entire business position. Our prospective enterprise clients immediately commented on its premium style, and our leads have increased significantly.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: "test-2",
    name: "Marc Sterling",
    role: "Founder",
    company: "Sterling Creative Group",
    review: "Exceptional design and attention to detail. Yohanna and his team are highly professional – they took our archaic layout and delivered a fast, beautiful landing page that converts traffic immediately.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: "test-3",
    name: "Dr. Amina Vance",
    role: "Chief Executive Officer",
    company: "Vitality Wellness",
    review: "Working with Yuhatex Technologies was a seamless experience. Our portfolio page was delivered ahead of schedule, with perfect mobile responsiveness, robust elements, and elegant scrolling curves.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    rating: 5
  }
];
