import { useState, useEffect } from "react";
import { TESTIMONIALS_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll mobile carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0B1E36] text-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300 font-mono">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            See how forward-thinking directors and business leaders scale their visual interfaces and conversion flows with Yuhatex Technologies.
          </p>
        </div>

        {/* Desktop Layout: 3 Column Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left relative flex flex-col justify-between hover:border-blue-400/55 hover:bg-white/10 transition-all group"
            >
              {/* Overlapping Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
                <Quote className="w-10 h-10 transform translate-x-1 -translate-y-1" />
              </div>

              <div className="space-y-6">
                {/* 5 Stars Indicator */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-300 text-blue-200" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-200 text-sm leading-relaxed italic font-normal">
                  "{item.review}"
                </blockquote>
              </div>

              {/* User Identity Details */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/20"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {item.role}, <span className="text-blue-300 font-semibold">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout: Carousel Slider (Visible on small screens) */}
        <div className="relative md:hidden max-w-sm mx-auto overflow-hidden min-h-[345px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left relative flex flex-col justify-between h-full w-full"
            >
              {/* Quote Ornament */}
              <div className="absolute top-4 right-4 text-blue-500/10">
                <Quote className="w-8 h-8" />
              </div>

              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(TESTIMONIALS_DATA[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-300 text-blue-200" />
                  ))}
                </div>

                <blockquote className="text-gray-200 text-sm leading-relaxed italic font-normal">
                  "{TESTIMONIALS_DATA[activeIndex].review}"
                </blockquote>
              </div>

              {/* User Identity Bottom info */}
              <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-white/5">
                <img
                  src={TESTIMONIALS_DATA[activeIndex].avatarUrl}
                  alt={TESTIMONIALS_DATA[activeIndex].name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-blue-500/30"
                />
                <div className="text-left">
                  <h4 className="font-display font-bold text-xs text-white">
                    {TESTIMONIALS_DATA[activeIndex].name}
                  </h4>
                  <p className="text-[10px] text-gray-400">
                    {TESTIMONIALS_DATA[activeIndex].role}, <span className="text-blue-300 font-semibold">{TESTIMONIALS_DATA[activeIndex].company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel buttons details (mobile only) */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 active:scale-90 transition-all text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Tracking dots */}
          <div className="flex gap-2">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === activeIndex ? "bg-blue-300" : "bg-white/20"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 active:scale-90 transition-all text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
