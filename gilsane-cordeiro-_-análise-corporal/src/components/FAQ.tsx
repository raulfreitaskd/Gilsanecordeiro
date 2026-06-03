import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-slate-100/40 relative border-t border-b border-slate-200/50 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold-400/5 blur-3xl rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4">
        {/* Header decoration */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <HelpCircle className="w-5 h-5 text-gold-600" />
          <span className="text-xs font-mono tracking-widest text-gold-600 uppercase font-semibold">Esclarecendo Suas Dúvidas</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-medium text-center text-slate-900 mb-4 leading-snug">
          Como funciona a psicoterapia com base no corpo?
        </h2>
        <p className="text-sm md:text-base text-center text-slate-600 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          Entenda como Gilsane Cordeiro realiza diagnósticos profundos e sessões particulares de acolhimento totalmente online para brasileiros que residem em qualquer país europeu.
        </p>

        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/85 rounded-xl overflow-hidden transition-all shadow-sm hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className="font-sans text-base md:text-lg text-slate-850 font-medium leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-gold-100 text-gold-700" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-6 md:px-6 md:pb-7 text-sm md:text-base text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer.split("\n\n").map((para, i) => (
                          <p key={i} className={i > 0 ? "mt-3" : ""}>
                            {para}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
