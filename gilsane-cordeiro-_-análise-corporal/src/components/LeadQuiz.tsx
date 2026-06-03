import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, CheckCircle2, User, Phone, MapPin, AlertCircle, ArrowLeft, Send } from "lucide-react";
import { COUNTRY_OPTIONS, SYMPTOM_OPTIONS } from "../data";

interface LeadQuizProps {
  onLeadSuccess: (lead: { name: string; country: string; symptom: string }) => void;
}

export default function LeadQuiz({ onLeadSuccess }: LeadQuizProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedSymptom, setSelectedSymptom] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleNextStep = () => {
    if (step === 1 && !selectedCountry) {
      setError("Por favor, selecione onde você mora.");
      return;
    }
    if (step === 2 && !selectedSymptom) {
      setError("Por favor, selecione seu principal travamento.");
      return;
    }
    setError("");
    setStep(step + 1);
  };

  const handleBackStep = () => {
    setError("");
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Por favor, digite seu nome.");
      return;
    }
    if (!whatsapp.trim()) {
      setError("Por favor, informe seu WhatsApp para receber o retorno.");
      return;
    }

    // Save lead to local state & local storage
    const countryObj = COUNTRY_OPTIONS.find(c => c.code === selectedCountry);
    const countryName = countryObj ? `${countryObj.flag} ${countryObj.name}` : selectedCountry;
    const symptomObj = SYMPTOM_OPTIONS.find(s => s.id === selectedSymptom);
    const symptomLabel = symptomObj ? symptomObj.label : selectedSymptom;

    const leadData = {
      name,
      whatsapp,
      country: countryName,
      symptom: symptomLabel,
      date: new Date().toISOString()
    };

    // Save lead list in localStorage
    try {
      const existing = localStorage.getItem("gilsane_leads");
      const leadsList = existing ? JSON.parse(existing) : [];
      leadsList.push(leadData);
      localStorage.setItem("gilsane_leads", JSON.stringify(leadsList));
    } catch (e) {
      console.error("Local storage error:", e);
    }

    onLeadSuccess({ name, country: countryName, symptom: symptomLabel });
    setStep(4); // Success step
  };

  // Generate dynamic WhatsApp link
  const getWhatsAppLink = () => {
    const countryObj = COUNTRY_OPTIONS.find(c => c.code === selectedCountry);
    const symptomObj = SYMPTOM_OPTIONS.find(s => s.id === selectedSymptom);
    
    const countryClean = countryObj ? countryObj.name : "Exterior";
    const symptomClean = symptomObj ? symptomObj.label : "Esgotamento emocional";

    const text = `Olá, vim do site e gostaria de mais informções. Finalizei meu diagnóstico na Landing Page: meu nome é ${name}, moro em ${countryClean} e sinto principalmente: ${symptomClean}. Gostaria de agendar minha sessão de Análise Corporal e Psicoterapia.`;
    return `https://api.whatsapp.com/send?phone=553388613561&text=${encodeURIComponent(text)}`; // Updated with Brazilian telephone and custom phrase prefix
  };

  return (
    <div id="diagnostic-quiz" className="bg-slate-900 border border-petrol-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden transition-all">
      {/* Absolute high-tech lighting background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-petrol-500/5 blur-3xl rounded-full pointer-events-none" />

      {step < 4 && (
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono py-1 px-2.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20">
              PASSO {step} DE 3
            </span>
            <span className="text-xs text-petrol-300 hidden sm:block">Mapeamento Clínico</span>
          </div>
          {step > 1 && (
            <button
              onClick={handleBackStep}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" /> Voltar
            </button>
          )}
        </div>
      )}

      {/* Progress Line */}
      {step < 4 && (
        <div className="w-full bg-slate-800 h-1.5 rounded-full mb-8 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-gold-500 to-amber-400 h-full transition-all duration-500 ease-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-2 leading-snug">
              Onde você está residindo atualmente?
            </h3>
            <p className="text-sm text-petrol-200 mb-6 font-light">
              Gilsane atende em horários compatíveis com a sua rotina no exterior.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {COUNTRY_OPTIONS.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    setSelectedCountry(c.code);
                    setError("");
                  }}
                  className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center gap-2 transition-all cursor-pointer ${
                    selectedCountry === c.code
                      ? "border-gold-500 bg-gold-500/10 text-white shadow-lg shadow-gold-500/5 ring-1 ring-gold-500/30"
                      : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  <span className="text-3xl filter drop-shadow-sm select-none">{c.flag}</span>
                  <span className="text-xs font-medium tracking-wide">{c.name}</span>
                </button>
              ))}
            </div>

            {error && (
              <div className="flex items-center gap-2 text-rose-400 text-xs mb-4">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              onClick={handleNextStep}
              className="w-full py-4.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-slate-950 font-semibold rounded-xl shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer text-sm tracking-wider uppercase"
            >
              Próxima Etapa <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-2 leading-snug">
              Qual é o sinal que o seu corpo deu de que chegou ao limite?
            </h3>
            <p className="text-sm text-petrol-200 mb-6 font-light">
              Mapeie o ponto de partida do seu travamento para estruturar seu diagnóstico inicial.
            </p>

            <div className="space-y-3 mb-6">
              {SYMPTOM_OPTIONS.map((symp) => (
                <button
                  key={symp.id}
                  type="button"
                  onClick={() => {
                    setSelectedSymptom(symp.id);
                    setError("");
                  }}
                  className={`w-full p-4 rounded-xl border text-left flex items-start gap-3.5 transition-all cursor-pointer ${
                    selectedSymptom === symp.id
                      ? "border-gold-500 bg-gold-500/10 text-white shadow-lg shadow-gold-500/5 ring-1 ring-gold-500/30"
                      : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors ${
                    selectedSymptom === symp.id ? "border-gold-400 bg-gold-500" : "border-slate-600 bg-slate-900"
                  }`}>
                    {selectedSymptom === symp.id && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                  </div>
                  <span className="text-sm font-medium leading-normal">{symp.label}</span>
                </button>
              ))}
            </div>

            {error && (
              <div className="flex items-center gap-2 text-rose-400 text-xs mb-4">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              onClick={handleNextStep}
              className="w-full py-4.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-slate-950 font-semibold rounded-xl shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer text-sm tracking-wider uppercase"
            >
              Continuar <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-2 leading-snug">
              Preencha seus dados para receber o retorno
            </h3>
            <p className="text-sm text-petrol-200 mb-6 font-light">
              Seus dados de diagnóstico prévio ficam carregados. Gilsane entrará em contato via WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Seu Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setError("");
                    }}
                    placeholder="Ex: João Silva"
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-gold-500 transition-all font-light"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">WhatsApp com DDD (Ex: +55 33 ...)</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => {
                      setWhatsapp(e.target.value);
                      setError("");
                    }}
                    placeholder="Ex: +55 33 98861-3561"
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-gold-500 transition-all font-light"
                    required
                  />
                </div>
                <span className="text-[11px] text-slate-500 block mt-1.5 italic">
                  * Fique tranquilo: seus dados estão sob absoluto sigilo psicanalítico.
                </span>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-rose-400 text-xs mt-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-slate-950 font-semibold rounded-xl shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer text-sm tracking-wider uppercase mt-4"
              >
                Salvar Pré-Avaliação <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-6"
          >
            <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-3">
              Mapeamento de Sintoma Concluído!
            </h3>
            <p className="text-base text-petrol-100 max-w-md mx-auto mb-6 leading-relaxed font-light">
              Olá, <strong className="text-white font-medium">{name}</strong>! Seus sintomas foram categorizados no sistema de análise psicossomática para brasileiros no exterior.
            </p>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4.5 max-w-md mx-auto mb-8 text-left space-y-2.5">
              <div className="flex items-center gap-2 text-xs">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span className="text-slate-400">Região de Residência:</span>
                <span className="text-white font-medium ml-auto">{COUNTRY_OPTIONS.find(c => c.code === selectedCountry)?.name || selectedCountry}</span>
              </div>
              <div className="h-px bg-slate-900" />
              <div className="flex items-start gap-2 text-xs">
                <AlertCircle className="w-4 h-4 text-gold-400 mt-0.5" />
                <span className="text-slate-400">Foco do Desconforto:</span>
                <span className="text-white font-medium ml-auto text-right max-w-[220px] leading-tight">
                  {SYMPTOM_OPTIONS.find(s => s.id === selectedSymptom)?.label || selectedSymptom}
                </span>
              </div>
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full md:w-auto px-8 py-4.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.02] items-center justify-center gap-3 cursor-pointer text-sm tracking-wider uppercase text-center"
            >
              Confirmar Agendamento no WhatsApp <Send className="w-4 h-4" />
            </a>

            <p className="text-xs text-slate-500 mt-4 italic">
              Ao clicar no botão, você será direcionado ao atendimento privado de Gilsane com seus dados pré-carregados.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
