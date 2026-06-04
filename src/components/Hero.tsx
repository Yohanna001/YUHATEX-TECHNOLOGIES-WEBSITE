import { ArrowDown, MessageSquare, Briefcase } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleScrollTo = (targetId: string) => {
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

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen pt-32 pb-20 flex items-center bg-[#0B1E36] text-white select-none"
    >
      {/* Background Image Container with layered opacity of the deep blue background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=2000"
          alt="Website Design Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
          style={{ opacity: 0.45 }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000";
          }}
        />
        {/* Double-layered color mask to maintain strict brand colors while showcasing design context */}
        <div className="absolute inset-0 bg-[#0B1E36]/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E36]/25 via-[#0B1E36]/65 to-[#0B1E36]" />
      </div>

      {/* Grid Pattern and Ambient Soft Blue Blurs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#1e40af]/10 blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 space-y-8">
            {/* Minimal Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-semibold uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Premium Web Design Agency</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white"
            >
              Professional Websites That Help{" " }
              <span className="text-blue-300">
                Businesses Grow
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl"
            >
              We design fast, modern, and conversion-focused websites that help businesses build credibility, attract customers, and grow online.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="https://wa.me/2347010749941?text=Hello%20Yuhatex%20Technologies%2C%20I%20am%20interested%20in%20your%20website%20design%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-blue-500/10 transition-all active:scale-95 text-base"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
              
              <button
                onClick={() => handleScrollTo("projects")}
                className="flex items-center justify-center gap-2.5 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-bold py-3.5 px-8 rounded-full transition-all active:scale-95 cursor-pointer text-base"
              >
                <Briefcase className="w-5 h-5 text-gray-300" />
                <span>View Our Work</span>
              </button>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-lg"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-blue-300">100%</p>
                <p className="text-xs uppercase tracking-wider text-gray-400">Responsive</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-blue-300">90%+</p>
                <p className="text-xs uppercase tracking-wider text-gray-400">Conversion Boost</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-display text-blue-300">24/7</p>
                <p className="text-xs uppercase tracking-wider text-gray-400">Support Availability</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Mockup Right SIDE */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-square bg-white/5 rounded-2xl overflow-hidden shadow-2xl border border-white/10 p-2 group"
            >
              {/* Premium laptop or tablet responsive website design mockup */}
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
                alt="Web App Mockup Design Showcase"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlap Status Layer */}
              <div className="absolute top-4 right-4 bg-[#0B1E36]/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 text-[10px] font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Active Showcase</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
          <button
            onClick={() => handleScrollTo("about")}
            className="text-xs tracking-widest text-blue-200 uppercase font-mono font-medium cursor-pointer"
          >
            Explore Agency
          </button>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-blue-300 cursor-pointer" onClick={() => handleScrollTo("about")} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
