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
    <section id="faq" className="py-20 bg-slate-900/40 relative border-t border-b border-petrol-100/10">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-petrol-500/5 blur-3xl rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4">
        {/* Header decoration */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <HelpCircle className="w-5 h-5 text-gold-400" />
          <span className="text-xs font-mono tracking-widest text-gold-400 uppercase">Esclarecendo Suas Dúvidas</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif text-center text-slate-900 dark:text-white mb-4 leading-tight">
          Como funciona a psicoterapia com base no corpo?
        </h2>
        <p className="text-sm md:text-base text-center text-petrol-600 dark:text-petrol-300 max-w-2xl mx-auto mb-16 font-light">
          Entenda como Gilsane Cordeiro realiza diagnósticos profundos e sessões particulares de acolhimento totalmente online para brasileiros que residem em qualquer país europeu.
        </p>

        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-petrol-100/40 dark:border-petrol-800/60 rounded-xl overflow-hidden transition-all shadow-sm hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className="font-serif text-base md:text-lg text-slate-800 dark:text-slate-100 font-medium leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-petrol-100/50 dark:bg-slate-800 text-petrol-600 dark:text-gold-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-gold-400/10 text-gold-500" : ""
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
                      <div className="px-5 pb-6 md:px-6 md:pb-7 text-sm md:text-base text-petrol-600 dark:text-petrol-300 font-light leading-relaxed border-t border-petrol-100/10 pt-4">
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
