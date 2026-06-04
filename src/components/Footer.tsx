import React from "react";
import { ArrowUp, Copyright, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const servicesLinks = [
    { name: "Business Websites", id: "services" },
    { name: "Portfolio Websites", id: "services" },
    { name: "Landing Pages", id: "services" },
    { name: "Website Redesign", id: "services" },
    { name: "Responsive Web Design", id: "services" },
    { name: "Website Maintenance", id: "services" }
  ];

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Selected Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <footer className="bg-[#061222] text-gray-400 pt-16 pb-8 border-t border-white/5 overflow-hidden relative text-left">
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Logo & Info column (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="flex items-center gap-2.5 group w-fit"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                Y
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white tracking-tight">
                  YUHATEX
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-blue-300 font-semibold leading-none">
                  Technologies
                </span>
              </div>
            </a>
            
            <p className="text-sm text-gray-405 leading-relaxed max-w-sm font-normal">
              A premium web design and development agency dedicated to helping businesses establish strong, fast, and high-converting digital storefronts. We focus on visual authority and robust performance.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/2347010749941?text=Hello%20Yuhatex%20Technologies%2C%20I%20am%20interested%20in%20your%20website%20design%20services."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-2.5 px-5 rounded-full shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Services Quicklist column (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="hover:text-blue-300 transition-colors py-1 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sitemap navigation column (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Sitemap
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="hover:text-blue-300 transition-colors py-1 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright & jump back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 select-none">
            <Copyright className="w-3.5 h-3.5" />
            <span>{currentYear} Yuhatex Technologies. All rights reserved. Professional web solutions designed to help businesses grow.</span>
          </div>

          <button
            onClick={(e) => handleScrollTo(e, "home")}
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 active:scale-90 transition-all group shrink-0"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
