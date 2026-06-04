import React from "react";
import { User, ShieldCheck, Zap, Laptop, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import founderPhoto from "../assets/images/my_profile.jpeg";

export default function About() {
  const values = [
    {
      icon: Laptop,
      title: "Conversion-Focused",
      desc: "Our priority is creating layouts that capture visitors and turn them into paying inquiries and direct leads."
    },
    {
      icon: Zap,
      title: "Highly Optimized speed",
      desc: "Websites developed by our team load in fractions of a second, matching strict Lighthouse benchmarks."
    },
    {
      icon: ShieldCheck,
      title: "Clean, Modern Aesthetics",
      desc: "Uncluttered, responsive designs tailored with deep navy and clean margins to project authority."
    }
  ];

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
    <section id="about" className="py-24 bg-white relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* About Text Left */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight">
                About Yuhatex Technologies
              </h2>
            </div>

            <p className="text-gray-650 text-base sm:text-lg leading-relaxed font-normal">
              Yuhatex Technologies is a web design agency dedicated to helping businesses establish a strong online presence through modern, responsive, and professionally designed websites. We focus on creating websites that are visually appealing, user-friendly, mobile-responsive, and built to support business growth.
            </p>

            {/* Minor Value Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-150">
              {values.map((v, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-700 inline-block">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-gray-900">
                    {v.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center gap-2 bg-[#0B1E36] hover:bg-blue-600 text-white font-bold text-sm py-3 px-6 rounded-full transition-all duration-300 shadow-md"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Founder Profile Card Right */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Card outline shadows */}
              <div className="absolute inset-0 bg-blue-100/40 rounded-3xl translate-x-2 translate-y-3 -z-10" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-gray-150 p-6 md:p-8 shadow-xl relative z-10"
              >
                {/* Holder image box */}
                <div className="relative w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-6 border border-gray-150 shadow-inner group">
                  <img
                    src={founderPhoto}
                    alt="Yohanna Isaac Emmanuel"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-gray-950/70 border border-white/10 backdrop-blur-sm py-1.5 px-3 rounded-lg text-[10px] text-blue-200 font-mono text-center">
                    Yohanna Isaac Emmanuel • Founder & CEO
                  </div>
                </div>

                {/* Profile detail */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-medium text-lg text-gray-950 uppercase tracking-widest font-bold">
                      YOHANNA ISAAC EMMANUEL
                    </h3>
                    <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-black">
                      CEO
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-bold tracking-wide uppercase">
                    Founder & CEO
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal pt-2">
                    "Passionate about technology and digital innovation, Yohanna Isaac Emmanuel founded Yuhatex Technologies to help businesses succeed online through professional website solutions that combine modern design, functionality, and performance."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
