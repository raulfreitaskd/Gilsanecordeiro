import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  MapPin, 
  UserCheck, 
  CheckCircle2, 
  ChevronLeft,
  ChevronRight, 
  ShieldAlert, 
  Lock, 
  Scale, 
  Video, 
  Clock, 
  Heart, 
  Star,
  Activity,
  Menu,
  X,
  Compass,
  ArrowDownCircle,
  HelpCircle,
  MessageCircle
} from "lucide-react";
import { PAIN_POINTS, FOR_WHOM_ITEMS, BODY_SHAPES, BodyShape } from "./data";
import FAQ from "./components/FAQ";

const WHATSAPP_NUMBER = "553388613561";

const getWhatsAppUrl = (originalText?: string) => {
  const text = "Olá, vim do site e gostaria de mais informações";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

// Import Gilsane's high-quality generated portrait
import gilsanePortrait from "./assets/images/Gil_book.jpg";
import gilsaneLaptop from "./assets/images/Gil-laptop.webp";
import gilsanePerfil from "./assets/images/gil_perfil.jpg";



interface ActiveLeadNotice {
  name: string;
  country: string;
  time: string;
}

const LIVE_LEADS: ActiveLeadNotice[] = [
  { name: "Mariana L.", country: "Irlanda 🇮🇪", time: "há 3 minutos" },
  { name: "Carlos S.", country: "Portugal 🇵🇹", time: "há 14 minutos" },
  { name: "Ana Beatriz K.", country: "Alemanha 🇩🇪", time: "há 34 minutos" },
  { name: "Tiago M.", country: "Reino Unido 🇬🇧", time: "há 1 hora" },
  { name: "Priscilla F.", country: "Suíça 🇨🇭", time: "há 2 horas" }
];

export default function App() {
  const [activeShapeId, setActiveShapeId] = useState<"esquizoide" | "oral" | "psicopata" | "masoquista" | "rigido">("esquizoide");
  const [currentLeadToast, setCurrentLeadToast] = useState<ActiveLeadNotice | null>(null);
  const [toastIndex, setToastIndex] = useState(0);
  const [userLeadInfo, setUserLeadInfo] = useState<{ name: string; country: string; symptom: string } | null>(null);
  const [activePainSlide, setActivePainSlide] = useState(0);
  const [activeCheckSlide, setActiveCheckSlide] = useState(0);

  // Rotate a high-conversion social proof "Live Lead Toast" every 12 seconds
  useEffect(() => {
    // Initial delay for some clean breathing space
    const initialTimeout = setTimeout(() => {
      setCurrentLeadToast(LIVE_LEADS[0]);
    }, 4000);

    const interval = setInterval(() => {
      setToastIndex((prev) => {
        const next = (prev + 1) % LIVE_LEADS.length;
        setCurrentLeadToast(LIVE_LEADS[next]);
        return next;
      });
    }, 12000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  // Smooth scroll to the Lead Questionnaire
  const scrollToQuiz = () => {
    const element = document.getElementById("diagnostic-quiz");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen text-slate-800 font-sans selection:bg-gold-200 selection:text-gold-900 bg-petrol-50/50 overflow-x-hidden">
      
      {/* Modern, Clean Minimal Header - NO NAVIGATION to distract the user from CTA */}
      <header className="py-6 px-6 max-w-7xl mx-auto flex justify-between items-center bg-transparent relative z-20">
        <div className="flex items-center gap-4">
          {/* Instagram-style circular photo in round frame */}
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full p-0.5 bg-gradient-to-tr from-gold-500 via-amber-400 to-rose-400 shadow-md flex-shrink-0 animate-pulse-slow">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 border-2 border-white">
        <img 
          src={gilsanePerfil} 
          alt="Gilsane Cordeiro em atendimento em seu consultório" 
          className="w-full h-auto object-cover antialiased transition-transform duration-700 hover:scale-[1.02]"
          style={{ imageRendering: 'auto', transform: 'translateZ(0)' }}
          referrerPolicy="no-referrer"
        />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg md:text-2xl font-semibold tracking-tight text-slate-900 leading-tight">
              Gilsane Cordeiro
            </span>
            <span className="text-[9px] md:text-[10px] font-mono tracking-widest text-gold-600 uppercase font-bold">
              Análise Corporal & Clinica Psicanalítica
            </span>
          </div>
        </div>
      </header>

      {/* SEÇÃO 1: Dobra Principal (Hero Section) */}
      <section className="relative pt-8 pb-20 md:py-24 px-4 overflow-hidden">
        {/* Soft Decorative Ambient Lights behind hero */}
        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -top-10 left-10 w-[300px] h-[300px] bg-petrol-400/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Box */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Headline H1 */}
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-slate-950 font-medium leading-[1.15] mb-6 tracking-tight">
              Até quando você vai fingir que está aguentando o <span className="bg-gold-500/10 text-gold-700 px-1.5 py-[1px] rounded font-medium mx-0.5 animate-pulse">peso de viver aí fora?</span>
            </h1>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 w-full mb-8 relative z-10 text-center">
              <a
                href={getWhatsAppUrl("Olá Gilsane! Cheguei ao meu limite morando no exterior e preciso de ajuda. Gostaria de agendar meu diagnóstico corporal.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto max-w-[280px] sm:max-w-none py-3 px-6 sm:py-4 sm:px-8 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-semibold tracking-wide transition-all shadow-xl hover:shadow-slate-900/10 hover:scale-[1.01] text-xs sm:text-sm text-center flex items-center justify-center gap-2.5 cursor-pointer group uppercase animate-cta-pulse self-center"
              >
                <span>Cheguei ao meu limite, preciso de ajuda</span>
                <ChevronRight className="w-4 h-4 text-gold-400" />
              </a>

              <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left gap-1 px-2.5">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                  ))}
                  <span className="text-xs font-semibold text-slate-900 ml-1.5">+500 brasileiros</span>
                </div>
                <span className="text-[11px] text-slate-500 font-light">atendidos em Portugal, Irlanda e Reino Unido</span>
              </div>
            </div>

            {/* Mobile Portrait view - shown only on mobile/tablet, hidden on desktop */}
            <div className="block lg:hidden w-full my-6 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[28px] overflow-hidden shadow-xl p-2 bg-white border border-slate-200/50">
                <div className="w-full h-full rounded-[20px] overflow-hidden bg-slate-100 relative">
            <img 
              src={gilsanePortrait} 
              alt="Gilsane Cordeiro em atendimento em seu consultório" 
              className="w-full h-auto object-cover antialiased transition-transform duration-700 hover:scale-[1.02]"
              style={{ imageRendering: 'auto', transform: 'translateZ(0)' }}
              referrerPolicy="no-referrer"
            />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-4 pt-12 text-white text-left">
                    <span className="text-xs font-mono text-gold-400 font-semibold tracking-widest uppercase">Gilsane Cordeiro</span>
                    <p className="text-[10px] text-slate-300 font-light mt-0.5">Análise Corporal & Método Prático</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subheading Verbatim Copy with gold CRO highlighter markers */}
            <p className="text-sm md:text-base lg:text-lg text-slate-700 font-light leading-relaxed mb-8 max-w-2xl">
              <span className="bg-gold-500/10 text-gold-700 px-1.5 py-[1px] rounded font-medium mx-0.5">Longe da família</span>, sem rede de apoio e sob a <span className="bg-gold-500/10 text-gold-700 px-1.5 py-[1px] rounded font-medium mx-0.5">pressão constante</span> de dar certo, você se obrigou a <span className="bg-gold-500/10 text-gold-700 px-1.5 py-[1px] rounded font-medium mx-0.5">ser forte</span>. 
              Mas o seu corpo de hoje, travado por uma <span className="bg-gold-500/10 text-gold-700 px-1.5 py-[1px] rounded font-medium mx-0.5">fadiga inexplicável</span>, a insônia crônica e a <span className="bg-gold-500/10 text-gold-700 px-1.5 py-[1px] rounded font-medium mx-0.5">ansiedade persistente</span> mostram que você <span className="bg-gold-500/10 text-gold-700 px-1.5 py-[1px] rounded font-medium mx-0.5">chegou ao limite</span>. 
              E você não vai precisar passar meses <span className="bg-gold-500/10 text-gold-700 px-1.5 py-[1px] rounded font-medium mx-0.5">tentando explicar</span> com palavras cansadas o que sente no peito: 
              através de uma <span className="bg-gold-500/10 text-gold-700 px-1.5 py-[1px] rounded font-medium mx-0.5">metodologia profunda</span> e focada, a Gilsane analisa de forma cirúrgica o formato do seu corpo e os traços da fisionomia para entregar um <span className="bg-gold-500/10 text-gold-700 px-1.5 py-[1px] rounded font-medium mx-0.5">diagnóstico exato</span> e aparentemente inexplicável das dores que você tenta esconder do mundo. 
              É o <span className="bg-gold-500/10 text-gold-700 px-1.5 py-[1px] rounded font-medium mx-0.5">alívio imediato</span> que você precisa, sem enrolação. 
              <span className="block mt-4 text-slate-950 font-semibold tracking-wide border-l-2 border-gold-500 pl-3">O FORMATO DO SEU CORPO EXPLICA SUA MENTE.</span>
            </p>

            {/* Micro Benefits list under the main CTA */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 border-t border-slate-200/60 pt-5 w-full">
              <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-gold-600" /> 100% Confidencial</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold-600" /> Fuso Europeu Atendido</span>
              <span className="flex items-center gap-1.5"><Video className="w-3.5 h-3.5 text-gold-600" /> Videoconferência Prática</span>
            </div>

          </div>

          {/* Right Image Space - shown only on desktop */}
          <div className="hidden lg:flex lg:col-span-5 relative w-full justify-center">
            
            {/* Visual Frame wrapper */}
            <div className="relative w-full max-w-[370px] lg:max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl p-2.5 bg-white border border-slate-200/50">
              
              {/* Subtle top background decorative badge */}
              <div className="absolute top-6 left-6 z-10 bg-slate-950/80 backdrop-blur-md text-white font-mono text-[9px] tracking-wider py-1.5 px-3 rounded-md uppercase border border-white/10 uppercase">
                Análise Corporal & Método Prático
              </div>

              {/* Portrait */}
              <div className="w-full h-full rounded-[24px] overflow-hidden bg-slate-100 relative">
          <img 
            src={gilsanePortrait} 
            alt="Gilsane Cordeiro em atendimento em seu consultório" 
            className="w-full h-auto object-cover antialiased transition-transform duration-700 hover:scale-[1.02]"
            style={{ imageRendering: 'auto', transform: 'translateZ(0)' }}
            referrerPolicy="no-referrer"
          />
                          
                {/* Visual Bottom Fade gradient */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-6 pt-24 text-white text-left">
                  <span className="text-xs font-mono text-gold-400 font-semibold tracking-widest uppercase">Gilsane Cordeiro</span>
                  <p className="text-[11px] text-slate-300 font-light mt-0.5">Analista com forte atuação para comunidades de brasileiros no exterior.</p>
                </div>
              </div>

              {/* Background abstract element mimicking clinical precision axes */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-gold-500/60 pointer-events-none rounded-bl-3xl" />
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-gold-500/60 pointer-events-none rounded-tr-3xl" />
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 2: A Validação da Dor */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-t from-slate-900 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-gold-400 tracking-widest uppercase mb-3 block">Estresse psicossomático da imigração</span>
            <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight leading-snug">
              O preço invisível de viver no <span className="font-display italic text-gold-400 font-normal">exterior.</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold-500/40 mx-auto mt-6" />
          </div>

          {/* Grid of Cards (Desktop) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PAIN_POINTS.map((point) => (
              <div 
                key={point.id}
                className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6.5 relative overflow-hidden transition-all hover:bg-slate-900 hover:border-gold-500/30 group shadow-lg"
              >
                {/* Diagonal decoration overlay mapping the muscle grid */}
                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gold-500/5 blur-xl group-hover:bg-gold-500/10 transition-colors" />

                {/* Card Number / Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-semibold text-slate-500 group-hover:text-gold-400 transition-colors">
                    CASO DE ESTUDO {point.number}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 group-hover:bg-gold-400 transition-colors" />
                </div>

                {/* Card Title */}
                <h3 className="font-display text-lg md:text-xl text-white mb-3 font-medium group-hover:text-gold-300 transition-colors">
                  {point.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Carousel representing Pain Points (Mobile) */}
          <div className="block md:hidden relative">
            <div className="overflow-hidden min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePainSlide}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(event, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x < -swipeThreshold) {
                      setActivePainSlide((prev) => (prev < PAIN_POINTS.length - 1 ? prev + 1 : 0));
                    } else if (info.offset.x > swipeThreshold) {
                      setActivePainSlide((prev) => (prev > 0 ? prev - 1 : PAIN_POINTS.length - 1));
                    }
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden shadow-xl cursor-grab active:cursor-grabbing touch-pan-y select-none"
                >
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gold-500/5 blur-xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-6 pointer-events-none">
                    <span className="font-mono text-[10px] font-semibold text-gold-400 uppercase tracking-widest">
                      Caso de Estudo {PAIN_POINTS[activePainSlide].number} de 04
                    </span>
                    <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                  </div>

                  <h3 className="font-display text-lg text-white mb-3 font-medium pointer-events-none">
                    {PAIN_POINTS[activePainSlide].title}
                  </h3>

                  <p className="text-slate-400 text-xs font-light leading-relaxed pointer-events-none">
                    {PAIN_POINTS[activePainSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots + Arrows Navigation */}
            <div className="flex items-center justify-between mt-6 px-1">
              <button
                type="button"
                onClick={() => setActivePainSlide((prev) => (prev > 0 ? prev - 1 : PAIN_POINTS.length - 1))}
                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 bg-slate-900 hover:border-slate-700 active:scale-95 transition-all"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {PAIN_POINTS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePainSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      activePainSlide === idx ? "bg-gold-500 w-5" : "bg-slate-800 w-2"
                    }`}
                    aria-label={`Ir para slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActivePainSlide((prev) => (prev < PAIN_POINTS.length - 1 ? prev + 1 : 0))}
                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 bg-slate-900 hover:border-slate-700 active:scale-95 transition-all"
                aria-label="Próximo slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Prompt under pain points to guide users and trigger empathy */}
          <div className="mt-12 bg-slate-900/40 border border-slate-800 rounded-xl p-5 text-center text-xs md:text-sm text-slate-400 font-light flex flex-col md:flex-row items-center justify-center gap-3 max-w-4xl mx-auto">
            <span className="flex items-center gap-1.5 text-gold-400 font-semibold"><ShieldAlert className="w-4 h-4 flex-shrink-0" /> IMPORTANTE ATENÇÃO:</span>
            <span>Mudar de país não zera os seus traumas; pelo contrário, a solidão age como um catalisador que materializa esses travamentos nas suas costas, estômago, nuca e quadris.</span>
          </div>

          {/* Section 2 CTA button to WhatsApp */}
          <div className="mt-12 text-center relative z-20">
            <a
              href={getWhatsAppUrl("Olá Gilsane! Sinto os impactos físicos de viver no exterior (como tensões e cansaço). Quero agendar minha sessão de Análise Corporal.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex py-4 px-8 rounded-xl bg-gold-400 hover:bg-gold-500 text-slate-950 font-extrabold tracking-wide transition-all shadow-xl shadow-gold-950/40 hover:scale-[1.02] active:scale-[0.99] text-sm items-center justify-center gap-3 cursor-pointer group uppercase"
            >
              <span>Quero aliviar minhas dores e tensões acumuladas</span>
              <ChevronRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </section>

      {/* SEÇÃO 3: Os 5 Formatos de Corpo da Análise Corporal */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gold-500/5 blur-[90px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono text-gold-600 tracking-widest uppercase mb-3 block font-semibold">ANÁLISE DE FORMATO DO CORPO</span>
            <h2 className="text-3xl md:text-4xl font-display text-slate-950 font-medium leading-snug mb-4 tracking-tight">
              O Formato do seu corpo revela suas dores e também os seus recursos
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light">
              Através da ANÁLISE CORPORAL, Gilsane pode te ajudar a resolver qualquer tipo de problema, medo ou circunstâncias que você esteja passando.
            </p>
          </div>

          {/* INTERACTIVE BODY SHAPES CONTAINER (CRO Powerhouse Engagement Tool) */}
          <div className="bg-slate-950 rounded-3xl p-6 md:p-10 text-white relative shadow-2xl border border-slate-900">
              
              <div className="bg-slate-900 py-2.5 px-4 rounded-xl border border-slate-800 flex justify-between items-center mb-8 text-xs">
                <span className="font-mono text-gold-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-gold-500 animate-pulse" /> Mapeador dos 5 Formatos Corporais
                </span>
                <span className="text-slate-400 font-light hidden sm:inline">Selecione o formato para ver o mapeamento</span>
              </div>

              {/* Grid / Row of clickable geometry shape cards */}
              <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-3.5 pb-6 md:pb-8 scrollbar-none snap-x snap-mandatory">
                {BODY_SHAPES.map((shape) => {
                  const isActive = activeShapeId === shape.id;
                  return (
                    <button
                      key={shape.id}
                      onClick={() => setActiveShapeId(shape.id)}
                      className={`snap-center shrink-0 w-[180px] md:w-auto p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center cursor-pointer ${
                        isActive
                          ? "bg-slate-900 border-gold-400/80 shadow-lg shadow-gold-500/10 scale-[1.02]"
                          : "bg-slate-950 border-slate-850 hover:bg-slate-900/60 hover:border-slate-800"
                      }`}
                    >
                      {/* Geometric Representation */}
                      <div className="mb-4 flex items-center justify-center p-1 rounded-full relative w-16 h-20">
                        <svg className="w-12 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* 1. Underlying subtle clinical human body silhouette */}
                          <g className={`transition-opacity duration-300 ${isActive ? "opacity-35" : "opacity-15"}`}>
                            {/* Stylized Head */}
                            <circle cx="24" cy="11" r="5" className="fill-slate-100" />
                            {/* Stylized Neck */}
                            <rect x="22.5" y="17" width="3" height="3" rx="0.5" className="fill-slate-100" />
                            {/* Stylized Torso and shoulders */}
                            <path d="M14 21h20c1.5 0 2.5 1 2.5 2.5 v12c0 1.5-1 2.5-2.5 2.5H14c-1.5 0-2.5-1-2.5-2.5v-12C11.5 22 12.5 21 14 21z" className="fill-slate-100" />
                            {/* Stylized Hips/Legs base */}
                            <path d="M16 35h16v20H27.5v-7h-7v7H16v-20z" className="fill-slate-100" />
                          </g>

                          {/* 2. Top-layered geometric diagnostic shape superimposition */}
                          {shape.shapeType === "rectangle" && (
                            <rect 
                              x="18" y="18" width="12" height="24" rx="1.5" 
                              className={`transition-all duration-350 fill-none ${
                                isActive 
                                  ? "stroke-sky-400 stroke-[2] [filter:drop-shadow(0_0_4px_rgba(56,189,248,0.7))]" 
                                  : "stroke-sky-500/50 stroke-[1.5]"
                              }`} 
                            />
                          )}
                          {shape.shapeType === "circle" && (
                            <circle 
                              cx="24" cy="29.5" r="9" 
                              className={`transition-all duration-350 fill-none ${
                                isActive 
                                  ? "stroke-pink-400 stroke-[2] [filter:drop-shadow(0_0_4px_rgba(244,114,182,0.7))]" 
                                  : "stroke-pink-500/50 stroke-[1.5]"
                              }`} 
                            />
                          )}
                          {shape.shapeType === "triangle" && (
                            <polygon 
                              points="13,21.5 35,21.5 24,37" 
                              className={`transition-all duration-350 fill-none ${
                                isActive 
                                  ? "stroke-amber-400 stroke-[2] [filter:drop-shadow(0_0_4px_rgba(245,158,11,0.7))]" 
                                  : "stroke-amber-500/50 stroke-[1.5]"
                              }`} 
                            />
                          )}
                          {shape.shapeType === "square" && (
                            <rect 
                              x="15" y="21.5" width="18" height="18" rx="2.5" 
                              className={`transition-all duration-350 fill-none ${
                                isActive 
                                  ? "stroke-emerald-400 stroke-[2] [filter:drop-shadow(0_0_4px_rgba(52,211,153,0.7))]" 
                                  : "stroke-emerald-500/50 stroke-[1.5]"
                              }`} 
                            />
                          )}
                          {shape.shapeType === "hourglass" && (
                            <path 
                              d="M15 21 h18 L24 29.5 L33 38 H15 L24 29.5 Z" 
                              className={`transition-all duration-350 fill-none ${
                                isActive 
                                  ? "stroke-violet-400 stroke-[2] [filter:drop-shadow(0_0_4px_rgba(167,139,250,0.7))]" 
                                  : "stroke-violet-500/50 stroke-[1.5]"
                              }`} 
                            />
                          )}
                        </svg>
                      </div>

                      <span className={`text-sm tracking-wide font-medium block uppercase ${isActive ? "text-gold-300 font-semibold" : "text-slate-300"}`}>
                        {shape.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 block mt-1.5 uppercase tracking-widest">
                        {shape.geometry}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Shape Detail Panel */}
              {(() => {
                const selectedShape = BODY_SHAPES.find(s => s.id === activeShapeId);
                if (!selectedShape) return null;
                return (
                  <div className="bg-slate-900 border border-slate-850 rounded-2xl p-5 md:p-8 min-h-[280px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedShape.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-6"
                      >
                        {/* Summary side */}
                        <div className="md:col-span-5 flex flex-col justify-start space-y-4">
                          <div>
                            <span className="text-[10px] font-mono uppercase text-gold-400 tracking-widest block font-semibold mb-1">
                              Geometria: {selectedShape.geometry}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight">
                              {selectedShape.name}
                            </h3>
                            <p className="text-slate-400 text-xs md:text-sm font-light italic mt-1.5">
                              {selectedShape.subtitle}
                            </p>
                          </div>

                          <div className="bg-slate-950 border border-slate-850 p-4.5 rounded-xl">
                            <span className="text-[10px] font-mono uppercase text-rose-450 block tracking-widest font-semibold mb-1">
                              Dor Inconsciente Central
                            </span>
                            <span className="text-slate-100 text-sm md:text-base font-medium leading-tight block">
                              {selectedShape.pain}
                            </span>
                          </div>
                        </div>

                        {/* Symptoms side */}
                        <div className="md:col-span-7 flex flex-col justify-between space-y-5">
                          <div className="space-y-3">
                            <span className="text-[10px] font-mono uppercase text-teal-400 block tracking-widest font-semibold mb-2">
                              Sinais e Sintomas Comuns
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {selectedShape.symptoms.map((symptom, sIdx) => (
                                <div key={sIdx} className="flex items-center gap-2.5 bg-slate-950/30 border border-slate-850 p-2.5 rounded-lg">
                                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                                  <span className="text-slate-350 text-xs font-light leading-relaxed">
                                    {symptom}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Phrase Quote Accent bar */}
                          <div className="bg-gradient-to-r from-gold-500/10 via-amber-500/5 to-transparent border-l-2 border-gold-500 p-4.5 rounded-r-xl">
                            <p className="text-gold-200 text-xs md:text-sm font-medium italic tracking-wide leading-relaxed">
                              {selectedShape.phrase}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                );
              })()}

          </div>

        </div>
      </section>

      {/* SEÇÃO 4: Para quem é */}
      <section className="py-20 bg-slate-100/50 relative border-t border-slate-200/40 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-gold-600 tracking-widest uppercase mb-3 block font-semibold">DIAGNÓSTICO DE TRAÇOS</span>
            <h2 className="text-3xl md:text-4xl font-display text-slate-950 font-medium leading-snug">
              Este processo é para você se:
            </h2>
            <p className="text-slate-600 text-sm font-light mt-4 leading-relaxed max-w-2xl mx-auto">
              Analise criteriosamente o formato do seu corpo. Se você se reconhece em 2 ou mais deles, significa que suas dores variam e você tem um conflito interno que a Análise cirúrgica de Gilsane pode mudar esse cenário de dor para uma vida de sucesso.
            </p>
          </div>

          {/* Desktop view (Static Card list) */}
          <div className="hidden md:block bg-white border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-xl max-w-3xl mx-auto space-y-6">
            {FOR_WHOM_ITEMS.map((item, index) => (
              <div 
                key={item.id} 
                className="flex items-start gap-4 p-4.5 bg-slate-50/70 border border-slate-100 rounded-xl transition-all hover:border-gold-500/20"
              >
                <div className="w-6 h-6 rounded-full bg-gold-100 border border-gold-300 text-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold leading-none">{index + 1}</span>
                </div>
                <p className="text-slate-700 text-sm md:text-base font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile view (Sleek Carousel) */}
          <div className="block md:hidden relative max-w-md mx-auto">
            <div className="overflow-hidden min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCheckSlide}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(event, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x < -swipeThreshold) {
                      setActiveCheckSlide((prev) => (prev < FOR_WHOM_ITEMS.length - 1 ? prev + 1 : 0));
                    } else if (info.offset.x > swipeThreshold) {
                      setActiveCheckSlide((prev) => (prev > 0 ? prev - 1 : FOR_WHOM_ITEMS.length - 1));
                    }
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-md relative overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y select-none"
                >
                  <div className="flex items-center gap-3 mb-4 pointer-events-none">
                    <div className="w-8 h-8 rounded-full bg-gold-100 border border-gold-300 text-gold-700 font-bold flex items-center justify-center text-xs flex-shrink-0">
                      {activeCheckSlide + 1}
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                      Sintoma {activeCheckSlide + 1} de 4
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed font-light pointer-events-none">
                    {FOR_WHOM_ITEMS[activeCheckSlide].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots + Arrows Navigation */}
            <div className="flex items-center justify-between mt-6 px-1">
              <button
                type="button"
                onClick={() => setActiveCheckSlide((prev) => (prev > 0 ? prev - 1 : FOR_WHOM_ITEMS.length - 1))}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 bg-white hover:text-slate-800 shadow-sm active:scale-95 transition-all"
                aria-label="Indicador anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {FOR_WHOM_ITEMS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveCheckSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      activeCheckSlide === idx ? "bg-gold-500 w-5" : "bg-slate-300 w-2"
                    }`}
                    aria-label={`Ir para indicador ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveCheckSlide((prev) => (prev < FOR_WHOM_ITEMS.length - 1 ? prev + 1 : 0))}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 bg-white hover:text-slate-800 shadow-sm active:scale-95 transition-all"
                aria-label="Próximo indicador"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs text-slate-500 italic">
              Não prorrogue o sofrimento psicossomático. imigrantes de alto rendimento tendem a camuflar colapsos emocionais até paralisarem.
            </p>
          </div>

          {/* Section 4 CTA button to WhatsApp */}
          <div className="mt-8 text-center">
            <a
              href={getWhatsAppUrl("Olá Gilsane! Me identifiquei totalmente com o perfil de cansaço e esgotamento. Gostaria de iniciar meu tratamento e marcar minha análise corporal.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex py-4 px-8 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold tracking-wide transition-all shadow-md hover:scale-[1.01] text-sm items-center justify-center gap-3 cursor-pointer group uppercase"
            >
              <span>Me identifiquei com esse perfil, preciso de ajuda</span>
              <ChevronRight className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </section>

      {/* SEÇÃO 5: Sobre a Analista */}
      <section id="sobre-a-analista" className="py-20 bg-white relative overflow-hidden text-slate-800">
        <div className="absolute top-0 right-1/2 w-96 h-96 bg-petrol-100/30 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Image section with video frame/clinical mockup */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[360px] aspect-[1/1] sm:aspect-[3/4] rounded-[24px] overflow-hidden shadow-2xl bg-slate-100 border-4 border-white">
                

          <img 
            src={gilsaneLaptop} 
            alt="Gilsane Cordeiro em atendimento em seu consultório" 
            className="w-full h-auto object-cover antialiased transition-transform duration-700 hover:scale-[1.02]"
            style={{ imageRendering: 'auto', transform: 'translateZ(0)' }}
            referrerPolicy="no-referrer"
          />
                <div className="absolute top-4 right-4 bg-slate-950/80 text-white rounded-full p-2 border border-white/10 flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-3.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  Online Global
                </div>
              </div>
            </div>

            {/* Verbatim Analyst copy block of section 5 */}
            <div className="lg:col-span-7 text-left flex flex-col items-start justify-center">
              
              <span className="text-xs font-mono text-gold-600 tracking-widest uppercase mb-3 block font-semibold">Diretora Clínica</span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-slate-950 font-medium leading-snug mb-6">
                Quem é Gilsane Cordeiro?
              </h2>

              <div className="space-y-4 text-slate-700 text-sm md:text-base font-light leading-relaxed">
                <p>
                  Gilsane Cordeiro é Psicanalista formada e especialista em Análise Corporal. Com uma trajetória dedicada a decodificar as profundezas da mente humana, ela desenvolveu uma sensibilidade clínica rara: a capacidade de traduzir o que o inconsciente expressa através do corpo.
                </p>
                <p>
                  Para a Gilsane, o formato do seu corpo conta a história exata dos traumas, defesas e dores que você carrega - mesmo aqueles que você tenta esconder de si mesmo de modo incansável.
                </p>
                <p>
                  Unindo a precisão técnica da psicanálise ao diagnóstico visual da análise corporal, ela atua de forma cirúrgica e sem rodeios. Seu foco é devolver a identidade, o chão e o alívio emocional para brasileiros que estão enfrentando a solidão e o esgotamento extremo de viver no exterior. Uma profissional de confiança para guiar você de volta ao seu equilíbrio, de qualquer lugar do mundo.
                </p>
              </div>

              {/* Badges checklist row */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mt-8 pt-6 border-t border-slate-150">
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-slate-400">Sociedade</span>
                  <span className="text-sm font-semibold text-slate-900">Psicanálise Clínica</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-slate-400">Análise Corporal</span>
                  <span className="text-sm font-semibold text-slate-900">Mapeador de Traços</span>
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <span className="text-xs font-mono text-slate-400">Público-foco</span>
                  <span className="text-sm font-semibold text-slate-900">Brasileiros Imigrantes</span>
                </div>
              </div>

              {/* Section 5 CTA button to WhatsApp */}
              <div className="mt-8">
                <a
                  href={getWhatsAppUrl("Olá Gilsane! Conheci seu trabalho clínico e gostaria de agendar uma sessão de Análise Corporal com você.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex py-3.5 px-6.5 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-semibold tracking-wide transition-all shadow-md hover:scale-[1.01] text-xs uppercase items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <span>Agendar Atendimento com Gilsane</span>
                  <ChevronRight className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Accordion FAQ Component */}
      <FAQ />

      {/* SEÇÃO 6: CTA Final / Interactive Questionnaire anchor panel */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        {/* Abstract grid network background representing body analysis framework */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(ellipse at center, #fff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          
          <span className="text-xs font-mono text-gold-400 tracking-widest uppercase mb-4 block font-semibold">Agende de Qualquer Lugar</span>
          
          <h2 className="text-3xl md:text-5xl font-display font-light text-white mb-4 leading-snug tracking-tight">
            Dê o primeiro passo sem sair de <span className="font-display italic font-medium text-gold-400">casa.</span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-slate-350 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            O atendimento é 100% online, perfeitamente adaptado ao fuso horário corrido da Europa e realizado em um ambiente de absoluto sigilo ético e acolhimento clínico. O seu corpo já deu todos os sinais de que chegou ao limite. Agora, cabe inteiramente a você ouvir antes que seja tarde.
          </p>

          <div className="max-w-xl mx-auto mb-10">
            {/* Dynamic context warning */}
            <div className="bg-slate-900 border border-slate-800 p-4.5 rounded-2xl flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 text-center sm:text-left text-xs mb-6">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Video className="w-5 h-5 text-gold-400 flex-shrink-0 animate-pulse" />
                <div>
                  <div className="text-slate-200 font-medium">Atendimento On-line Zoom/Meet</div>
                  <div className="text-slate-450 text-[11px] font-light">Privado, seguro e de alta resolução técnica.</div>
                </div>
              </div>
              <div className="text-gold-400 font-semibold uppercase tracking-wider text-[10px] border border-gold-500/30 rounded py-1 px-2 flex-shrink-0">
                Fuso GMT/GMT+1
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="text-slate-300 text-sm mb-8 text-center leading-relaxed font-light">
              Clique no botão abaixo para iniciar o seu agendamento direto pelo <span className="text-emerald-400 font-medium">WhatsApp</span>:
            </div>

            <div className="flex justify-center">
              <a
                href={getWhatsAppUrl("Olá Gilsane! Quero agendar minha análise corporal e iniciar meu tratamento online.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 px-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold tracking-wide transition-all shadow-xl shadow-emerald-950/40 hover:scale-[1.01] text-sm md:text-base text-center flex items-center justify-center gap-3 cursor-pointer group uppercase animate-cta-pulse"
              >
                <span>Quero Agendar Minha Análise e Iniciar Meu Tratamento</span>
                <ChevronRight className="w-5 h-5 text-gold-200 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Clinica safe seals directly in page bottom to build trust */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[11px] font-mono tracking-wider text-slate-500">
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-gold-600" /> SIGILO ÉTICO PROFISSIONAL</span>
            <span className="flex items-center gap-1.5"><Scale className="w-3.5 h-3.5 text-gold-600" /> ATUAÇÃO CLÍNICA REGULAR</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-600" /> +500 LAUDOS CORPORAIS CONCLUÍDOS</span>
          </div>

        </div>
      </section>

      {/* Simple elegant clinical footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="font-display text-lg font-semibold text-white tracking-tight">Gilsane Cordeiro</span>
            <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-1">
              Clínica de Análise Corporal & Terapia para Imigrantes
            </p>
          </div>
          
          <div className="text-center md:text-right text-[11px] text-slate-500 font-light leading-relaxed max-w-sm">
            <p>© {new Date().getFullYear()} Gilsane Cordeiro. Todos os direitos reservados.</p>
            <p className="mt-1 text-[10px] text-slate-600">
              Uso estrito de dados conforme padrões de confidencialidade clínica internacional.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating social proof / Live Event lead popup (CRO CRO CRO) - Desktop only */}
      <AnimatePresence>
        {currentLeadToast && !userLeadInfo && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden sm:flex fixed bottom-4 left-4 sm:max-w-sm bg-slate-900 border border-slate-800 text-white p-4 rounded-xl shadow-2xl z-50 items-start gap-3.5"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse mt-1.5 flex-shrink-0" />
            
            <div className="text-left flex-1">
              <span className="text-[10px] font-mono uppercase text-gold-400 font-bold tracking-wider block">
                Agendamento Recente
              </span>
              <p className="text-xs text-slate-200 mt-1">
                <strong>{currentLeadToast.name}</strong> ({currentLeadToast.country}) realizou pré-avaliação e iniciou o agendamento de diagnóstico corporal {currentLeadToast.time}.
              </p>
            </div>

            <button
              onClick={() => setCurrentLeadToast(null)}
              className="text-slate-500 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 focus:outline-none"
        aria-label="Fale conosco no WhatsApp"
      >
        <span className="hidden md:inline-block bg-slate-900/95 backdrop-blur-sm text-white text-[11px] font-sans tracking-wide py-1.5 px-3 rounded-lg border border-slate-800 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
          Falar com Gilsane
        </span>
        <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95">
          {/* Pulse Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
          <MessageCircle className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
        </div>
      </a>

    </div>
  );
}
