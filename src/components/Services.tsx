import { useState } from "react";
import { SERVICES_DATA } from "../data";
import { ServiceItem } from "../types";
import { motion, AnimatePresence } from "motion/react";
import * as LucideIcons from "lucide-react";

// Modal text details mapped perfectly to new web design agency services
const SERVICE_DETAILS: Record<string, { bulletTitle: string; bullets: string[]; techBadge: string[] }> = {
  "business-websites": {
    bulletTitle: "Corporate Web Architecture",
    bullets: [
      "Highly professional profiles styled for companies, agencies, and public institutions.",
      "Custom contact forms, conversion tracking, and interactive maps integrations.",
      "SEO optimized structures to secure first-page local ranking results.",
      "High-security database and CMS implementations for direct content edits."
    ],
    techBadge: ["React", "TypeScript", "Tailwind CSS", "CMS Modules"]
  },
  "portfolio-websites": {
    bulletTitle: "Personal/Brand Portfolios",
    bullets: [
      "Custom portfolios tailored specifically for architects, designers, speakers, and executives.",
      "Dynamic media galleries featuring fast-loading, compressed image lists.",
      "Case study layouts styled to present projects with maximum visual authority.",
      "Integrated social media portals and direct touchpoint links."
    ],
    techBadge: ["React", "Framer Motion", "Tailwind CSS", "Unsplash Assets"]
  },
  "landing-pages": {
    bulletTitle: "High-Conversions & Speed",
    bullets: [
      "Painstakingly optimized single-page layouts focused on a single call-to-action.",
      "Integrated with email automation tools, CRM structures, and analytics pixels.",
      "A/B-testable architecture designed to maximize user engagement levels.",
      "Dynamic scrolling highlights and clean device mockups integrated."
    ],
    techBadge: ["React", "Analytics Pixels", "Vite Code", "Lead Forms"]
  },
  "website-redesign": {
    bulletTitle: "Web Transformation Services",
    bullets: [
      "Comprehensive rebuilds of outdated, slow, or non-responsive legacy layouts.",
      "Transition of static sites into modern React framework setups without SEO drop.",
      "Visual modernization focused on deep, premium corporate trust branding.",
      "Performance upgrades targeting perfect Google Lighthouse loading scores."
    ],
    techBadge: ["Legacy Migrate", "React Port", "SEO Refactor", "Speed Optimize"]
  },
  "responsive-design": {
    bulletTitle: "Multi-viewport Optimizations",
    bullets: [
      "Fluid, responsive grids that adapt seamlessly to any device size.",
      "Touch-target optimization ensuring fluid thumb navigation on smartphones.",
      "Image compressor pipelines adjusting sizes dynamically based on device width.",
      "Cross-browser tested layouts verifying uniform render performance."
    ],
    techBadge: ["CSS Grid", "Responsive Images", "Viewport Configs", "Safari Support"]
  },
  "website-maintenance": {
    bulletTitle: "Continuous Support & Audits",
    bullets: [
      "Regular backups, security audits, and domain health tracking checks.",
      "Rapid content, image, text, and pricing modifications upon user request.",
      "Technical consulting preventing server timeouts or script breakdown.",
      "24/7 responsiveness keeping your online presence flawless and active."
    ],
    techBadge: ["Backups", "Security Patches", "Domain Config", "24/7 Updates"]
  }
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Helper function to dynamically output Lucide components
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6" />;
    }
    return <LucideIcons.HelpCircle className="w-6 h-6" />;
  };

  const details = selectedService ? SERVICE_DETAILS[selectedService.id] : null;

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden text-left">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-blue-100/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-blue-150/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight">
            Our Web Design & Development Services
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            We design beautiful, fast, and high-converting websites optimized specifically to build credibility, attract leads, and grow your business online.
          </p>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 select-none">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6, boxShadow: "0 15px 30px -5px rgba(11, 30, 54, 0.08)" }}
              onClick={() => setSelectedService(service)}
              className="bg-white border border-gray-150 rounded-2xl p-5 text-left cursor-pointer transition-all hover:border-blue-300 flex flex-col justify-between h-full group overflow-hidden"
            >
              <div className="space-y-4">
                {/* Visual Cover Image with Overlay Badge */}
                <div className="relative w-full h-40 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
                  
                  {/* Dynamic Icon styled elegantly over the cover */}
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-[#0B1E36] text-white flex items-center justify-center transition-all group-hover:bg-blue-600">
                    {renderIcon(service.iconName)}
                  </div>
                </div>
                
                <h3 className="font-display font-bold text-lg text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-500 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* View details action visual */}
              <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-[#0b1e36] group-hover:text-blue-600 font-mono uppercase tracking-wider mt-4 border-t border-gray-105">
                <span>View Specifications</span>
                <LucideIcons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modern Pop-up Detail Modal */}
      <AnimatePresence>
        {selectedService && details && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark blur background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-gray-950/40 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white max-w-2xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-150 text-left overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-white/90 hover:text-white bg-slate-950/50 hover:bg-slate-950/70 transition-colors z-20"
                aria-label="Close modal"
              >
                <LucideIcons.X className="w-4 h-4" />
              </button>

              {/* Service header cover image */}
              <div className="relative h-44 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden bg-gray-100">
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent" />
                
                {/* Header title overlaid on image with background container */}
                <div className="absolute bottom-4 left-6 sm:left-8 flex gap-3.5 items-center">
                  <div className="w-11 h-11 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 border border-white/20">
                    {renderIcon(selectedService.iconName)}
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-[#93c5fd] font-extrabold block">Service Deep-Dive</span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-tight">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Core descriptive text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our implementation strategy integrates elegant layout paradigms focusing on performance. Here are some of the standard specifications we implement during client setups:
              </p>

              {/* Key capability bullets */}
              <div className="space-y-4 mb-6">
                <h4 className="text-xs uppercase font-mono font-bold text-blue-600 tracking-wider">
                  {details.bulletTitle}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {details.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs text-gray-600 font-normal leading-relaxed">
                      <LucideIcons.BadgeCheck className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology badges row */}
              <div className="border-t border-gray-150 pt-6 flex flex-wrap items-center gap-2">
                <span className="text-[10px] uppercase font-mono font-extrabold text-gray-400 tracking-wider mr-2">Featured Stack:</span>
                {details.techBadge.map((badge, idx) => (
                  <span key={idx} className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                    {badge}
                  </span>
                ))}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
