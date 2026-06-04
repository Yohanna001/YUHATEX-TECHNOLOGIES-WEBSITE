import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I am the Yuhatex Technologies AI Assistant. How can I help you with your web design or startup business website needs today?"
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const starterPrompts = [
    "What services do you offer?",
    "How do I start a website project?",
    "Can you redesign my website?",
  ];

  // Auto scroll
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((msg) => ({
            role: msg.role,
            content: msg.content
          }))
        })
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
      } else {
        throw new Error("Failed to reach server");
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I am having trouble connecting right now. To discuss your project directly, please click the WhatsApp button to chat with our CEO, Yohanna Isaac Emmanuel!"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      
      {/* 1. Launcher button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-blue-500/25 cursor-pointer relative group"
            id="chat-toggle-btn"
          >
            {/* Soft pulse ring */}
            <span className="absolute inset-0 rounded-full bg-blue-600/35 animate-ping opacity-75 -z-10" />
            <MessageSquare className="w-6 h-6" />
            
            {/* Quick tooltip */}
            <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 border border-gray-800 text-white text-[11px] font-bold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
              Ask AI Assistant
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Floating chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 35, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="w-80 sm:w-96 h-[480px] bg-white border border-gray-150 rounded-2xl shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Chat header */}
            <div className="bg-[#0B1E36] text-white py-4 px-5 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-normal tracking-wide uppercase">Yuhatex Assistant</h4>
                  <p className="text-[9px] text-[#22c55e] font-bold font-mono tracking-wide leading-none flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                    <span>AI Online</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat messages body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 text-left">
              {messages.map((msg, idx) => {
                const isAI = msg.role === "assistant";
                return (
                  <div key={idx} className={`flex ${isAI ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed ${
                        isAI
                          ? "bg-white text-gray-800 border border-gray-150 font-normal shadow-sm"
                          : "bg-blue-600 text-white font-medium shadow-sm"
                      }`}
                    >
                      {msg.content}
                      {/* Check if AI assistant suggests WhatsApp link */}
                      {isAI && msg.content.includes("+2347010749941") && (
                        <div className="mt-3 pt-2.5 border-t border-gray-100 flex justify-start">
                          <a
                            href="https://wa.me/2347010749941?text=Hello%20Yuhatex%20Technologies%2C%20I%2520am%20interested%20in%20your%20website%20design%2520services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-bold text-xs py-1.5 px-3.5 rounded-full shadow-sm transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-white" />
                            <span>Chat on WhatsApp</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Chat loader */}
              {loading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl p-3.5 bg-white text-gray-500 border border-gray-150 shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Starter templates */}
            {messages.length === 1 && (
              <div className="px-4 py-2 border-t border-gray-100 bg-gray-50 text-left space-y-1.5">
                <p className="text-[10px] uppercase font-mono font-bold text-gray-400">Sample Queries:</p>
                <div className="flex flex-wrap gap-1.5 pb-1">
                  {starterPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt)}
                      className="text-[11px] bg-white border border-gray-200 hover:border-blue-400 rounded-lg px-2.5 py-1.5 text-gray-600 font-medium cursor-pointer max-w-full text-left truncate transition-all"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputVal);
              }}
              className="border-t border-gray-150 p-4 bg-white flex items-center gap-2"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about website setup, speed, pricing..."
                className="w-full flex-1 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 focus:outline-none focus:border-blue-500 bg-gray-50/50"
              />
              <button
                type="submit"
                disabled={!inputVal.trim() || loading}
                className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-gray-250 disabled:text-gray-400 flex items-center justify-center text-white cursor-pointer select-none transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
