import React, { useState } from "react";
import { MessageSquare, Mail, Clock, Send, ShieldCheck, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("Business Website");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Constants provided in user request
  const WHATSAPP_NUMBER = "2347010749941"; // +2347010749941 sanitized
  const EMAIL_ADDRESS = "yuhatextechnologies@gmail.com";

  const handleLaunchWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    // Build custom message based on whether user filled details or default
    let msgText = "";
    if (name) {
      msgText = `Hello Yuhatex Technologies, my name is ${name}. I am interested in your ${projectType} services. ${details ? `Project details: ${details}` : ""}`;
    } else {
      msgText = "Hello Yuhatex Technologies, I am interested in your website design services.";
    }

    const encodedText = encodeURIComponent(msgText);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    // Open in a new tab
    window.open(url, "_blank", "noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden text-left">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-blue-50/50 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-blue-100/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION A: CTABANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0B1E36] rounded-3xl p-8 sm:p-12 text-white text-center mb-20 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle grid layout */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-300 px-3.5 py-1 bg-white/5 border border-white/10 rounded-full inline-block">
              Immediate Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Let's Build Your Website
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Ready to establish a professional online presence? Let's discuss your project.
            </p>
            
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => handleLaunchWhatsApp()}
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-blue-500/10 transform hover:scale-[1.01] transition-all text-base sm:text-lg cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* ================= SECTION B: CONTACT DETAILS & CONSULTATION ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Details Panel Left */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight">
                Start a Conversation
              </h2>
              <p className="text-gray-500 text-base sm:text-lg font-normal">
                Skip complex coordination. Contact Yuhatex Technologies directly to kickstart your premium website design discovery phase today.
              </p>
            </div>

            <div className="space-y-8">
              {/* WhatsApp direct block */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-gray-900 tracking-wide">
                    WhatsApp Direct Inquiry
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Chat directly with Yohanna Isaac Emmanuel:</p>
                  <a
                    href="https://wa.me/2347010749941?text=Hello%20Yuhatex%20Technologies%2C%20I%20am%20interested%20in%20your%20website%20design%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 font-bold font-mono tracking-wide mt-2 block"
                  >
                    +2347010749941
                  </a>
                </div>
              </div>

              {/* Email direct block */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-gray-900 tracking-wide">
                    Email Consultation
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Send your brief or customized specifications to:</p>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="text-sm text-blue-600 hover:text-blue-700 font-bold font-mono tracking-wide mt-2 block"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>

              {/* Business operating duration */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-gray-900 tracking-wide">
                    Operating Hours
                  </h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Monday – Friday: 09:00 AM – 06:00 PM (GMT+1)<br />
                    Saturday: 10:00 AM – 02:00 PM (GMT+1)
                  </p>
                </div>
              </div>
            </div>

            {/* Minor highlights tracker card */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-150 flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0" />
              <div>
                <p className="text-xs font-bold text-gray-800 font-display">Attention to Detail</p>
                <p className="text-[12px] text-gray-500 leading-normal mt-0.5">We respond within 1-2 hours on WhatsApp to review your exact landing pages or redesign specifications.</p>
              </div>
            </div>
          </div>

          {/* Interactive Form Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-150 flex flex-col gap-6 text-left relative overflow-hidden shadow-sm"
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <span className="text-[10px] uppercase font-mono font-bold text-blue-600 tracking-widest">
                Brief Builder Form
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-mono text-emerald-600 font-bold">READY TO CHAT</span>
              </div>
            </div>

            <form onSubmit={handleLaunchWhatsApp} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 block select-none">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Yohanna Isaac"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white font-sans text-sm text-gray-900 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 block select-none">
                  Project Category
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white font-sans text-sm text-gray-900 focus:outline-none focus:border-blue-500"
                >
                  <option>Business Website</option>
                  <option>Portfolio Website</option>
                  <option>Landing Page</option>
                  <option>Website Redesign</option>
                  <option>Responsive Design Upkeep</option>
                  <option>Website Maintenance</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 block select-none">
                  Project Details / Brief (Optional)
                </label>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={4}
                  placeholder="Briefly describe what your business needs..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-sans text-xs text-gray-900 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Action launcher */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#0B1E36] hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-98 cursor-pointer text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit and Open WhatsApp</span>
              </button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Brief compiled! Re-routed directly to WhatsApp chat.</span>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
