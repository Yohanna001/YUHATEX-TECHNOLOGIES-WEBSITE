import { VALUES_DATA } from "../data";
import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";

export default function WhyChooseUs() {
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />;
    }
    return <LucideIcons.HelpCircle className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />;
  };

  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      {/* Light soft blue blur background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-50/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight">
            Designed for Speed. Engineered for Conversion.
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            We operate with modern design disciplines and extreme code optimization to build high-performance web solutions that earn user trust instantly.
          </p>
        </div>

        {/* Benefits Grid (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUES_DATA.map((val, index) => (
            <motion.div
              key={val.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative p-5 rounded-2xl bg-white border border-gray-150 transition-all text-left flex flex-col gap-4 shadow-sm hover:border-blue-200 hover:shadow-md group overflow-hidden animate-none"
            >
              {/* Value Aspect Ratio Image Header */}
              <div className="relative w-full h-36 rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={val.imageUrl}
                  alt={val.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent" />
                
                {/* Minimalist index indicator over the image top right */}
                <div className="absolute top-2.5 right-2.5 text-[9px] font-mono text-white/90 bg-gray-950/60 backdrop-blur-sm px-2 py-0.5 rounded-md font-bold">
                  {`// 0${index + 1}`}
                </div>
              </div>

              <div className="flex gap-3.5 items-center mt-1">
                {/* Visual Icon with group-hover background inversion */}
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#0B1E36] transition-all">
                  {renderIcon(val.iconName)}
                </div>
                
                <h3 className="font-display font-bold text-base text-gray-900 tracking-wide group-hover:text-blue-600 transition-colors">
                  {val.title}
                </h3>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed font-normal">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Premium Banner Highlight aligned to Web Agency Focus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-[#0B1E36] rounded-3xl p-8 sm:p-10 text-white text-left relative overflow-hidden shadow-xl"
        >
          {/* Subtle decoration blur */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-blue-300 font-bold">Website Audits</span>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-white leading-snug">
                Is your business prepared to double its online inquiries?
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Don't lose high-intent potential customers to slow loading speeds or unresponsive interfaces. Let's design a high-converting digital storefront built specifically to funnel visitors directly into WhatsApp chats.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="https://wa.me/2347010749941?text=Hello%20Yuhatex%20Technologies%2C%20I%20am%20interested%20in%20your%20website%20design%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transform transition-all font-bold text-sm py-3.5 px-6 rounded-full"
              >
                <span>Start WhatsApp Chat</span>
                <LucideIcons.MessageSquare className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
