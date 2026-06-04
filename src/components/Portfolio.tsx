import { useState } from "react";
import { PORTFOLIO_DATA } from "../data";
import { Project } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Tag } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Corporate Website",
    "Landing Page",
    "Portfolio Design",
    "E-Commerce"
  ];

  // Filter projects
  const filteredProjects = filter === "All"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(proj => proj.category === filter);

  return (
    <section id="projects" className="py-24 bg-gray-50 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight">
            Selected Projects
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            A curated showcase of professional, fast-loading, and high-converting websites crafted to empower business credibility.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 max-w-4xl mx-auto px-4 select-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs sm:text-sm px-4.5 py-2.5 rounded-full font-bold transition-all relative cursor-pointer ${
                filter === cat
                  ? "text-white bg-[#0B1E36] shadow-sm transform -translate-y-0.5"
                  : "bg-white hover:bg-gray-100 text-gray-600 border border-gray-155"
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {filter === cat && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-[#0B1E36] rounded-full -z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="bg-white border border-gray-150 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[16/10] bg-gray-900 flex items-center justify-center">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-4 left-4 bg-gray-950/80 border border-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-blue-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Tag className="w-3 h-3" />
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl text-gray-950 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed mt-2.5">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badge list */}
                  <div className="space-y-4 pt-4 border-t border-gray-100 mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-gray-100 text-gray-500">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Live Details anchor */}
                    <a
                      href="https://wa.me/2347010749941?text=Hello%20Yuhatex%20Technologies%2C%20I%2520am%20interested%20in%20your%20website%20design%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 font-mono uppercase tracking-wider transition-colors"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Product Call-to-action placeholder */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center w-full">
            <p className="text-gray-400 text-base">No launches found in this technology category.</p>
          </div>
        )}

      </div>
    </section>
  );
}
