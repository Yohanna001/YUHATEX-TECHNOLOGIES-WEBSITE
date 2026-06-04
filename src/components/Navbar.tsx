import React, { useState, useEffect } from "react";
import { Menu, X, Smartphone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track window scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic for identifying active sections
      const sections = ["home", "about", "services", "projects", "contact"];
      const current = sections.find((sect) => {
        const el = document.getElementById(sect);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
        scrolled ? "py-3 shadow-md" : "py-5 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand - permanently fully visible, no fading or scaling down */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center gap-2.5 transition-all duration-300 ease-in-out opacity-100 scale-100"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0A2540] flex items-center justify-center text-white font-bold shadow-md">
              Y
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-lg md:text-xl tracking-tight text-[#0A2540] flex items-center gap-1.5">
                YUHATEX <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#1e40af] tracking-normal">Technologies</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-semibold">
                Web Design Agency
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 relative py-1.5 ${
                  activeSection === link.id
                    ? "text-[#1e40af] font-bold"
                    : "text-[#0A2540] hover:text-[#1e40af]"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e40af] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop WhatsApp Action BTN */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/2347010749941?text=Hello%20Yuhatex%20Technologies%2C%20I%20am%20interested%20in%20your%20website%20design%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0A2540] text-white font-bold text-sm py-2.5 px-5 rounded-full hover:bg-[#1e40af] shadow-md hover:shadow-lg hover:shadow-blue-500/10 active:scale-95 transition-all duration-300 group"
            >
              <span>Consult via WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg text-[#0A2540] hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4 text-left">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-semibold transition-all ${
                    activeSection === link.id
                      ? "bg-blue-50 text-[#1e40af] font-bold"
                      : "text-[#0A2540] hover:bg-gray-50 hover:text-[#1e40af]"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 px-4">
                <a
                  href="https://wa.me/2347010749941?text=Hello%20Yuhatex%20Technologies%2C%20I%20am%20interested%20in%20your%20website%20design%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#0A2540] text-white font-bold py-3 px-6 rounded-full hover:bg-[#1e40af] transition-colors"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
