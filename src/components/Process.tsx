import { PROCESS_STEPS } from "../data";
import { motion } from "motion/react";
import { MessageSquare, GitPullRequest, Laptop, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";

export default function Process() {
  // Helpers to assign relevant icons to steps
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <MessageSquare className="w-5 h-5 text-blue-600" />;
      case 1: return <GitPullRequest className="w-5 h-5 text-blue-600" />;
      case 2: return <Laptop className="w-5 h-5 text-blue-600" />;
      case 3: return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 4: return <Sparkles className="w-5 h-5 text-blue-600" />;
      case 5: return <MessageSquare className="w-5 h-5 text-blue-600" />;
      default: return <HelpCircle className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Visual top/bottom overlays */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-24 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
            How We Execute
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight">
            Our 6-Step Web Production Workflow
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            We follow professional design and engineering protocols at every milestone, ensuring websites launch flawlessly, on time, and build high trust.
          </p>
        </div>

        {/* Vertical Connected Animated Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Connecting Vertical Line Guideline */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 border-l border-dashed border-gray-300 -translate-x-1/2" />

          {/* Steps Loop */}
          <div className="space-y-16 md:space-y-24">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col md:flex-row relative items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Marker Dot Center */}
                  <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center -translate-x-1/2 z-20 shadow-md transform hover:scale-110 transition-transform">
                    {getStepIcon(index)}
                  </div>

                  {/* Left Side (Empty on big screens contextually) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Right Side / Text Card (takes full on mobile, half on desktop) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 text-left"
                  >
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100/50 border border-gray-150 transition-all shadow-sm hover:shadow-md relative overflow-hidden">
                      
                      {/* Step Stage Number Tag Background */}
                      <div className="absolute top-4 right-4 font-mono font-black text-gray-200/40 text-5xl tracking-normal select-none -z-0 leading-none">
                        {step.phase}
                      </div>

                      <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 font-mono relative z-10">
                        Phase {step.phase}
                      </span>
                      
                      <h3 className="font-display font-bold text-lg text-gray-950 mt-2 mb-3 tracking-wide relative z-10">
                        {step.name}
                      </h3>
                      
                      <p className="text-sm text-gray-500 leading-relaxed font-normal relative z-10">
                        {step.description}
                      </p>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
