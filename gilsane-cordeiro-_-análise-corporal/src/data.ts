export interface PainPoint {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface CheckItem {
  id: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CountryOption {
  code: string;
  name: string;
  flag: string;
}

export const PAIN_POINTS: PainPoint[] = [
  {
    id: "pain-1",
    number: "01",
    title: "Estar Sempre Forte",
    description: "Você se obrigou a ser forte demais para aguentar a burocracia, o frio e a distância. Agora, seu pescoço, costas e estômago estão pagando o preço em forma de dores crônicas."
  },
  {
    id: "pain-2",
    number: "02",
    title: "A Ansiedade de \"Dar Certo\"",
    description: "O medo constante de não ser bom o suficiente no trabalho ou de falhar no novo país gera uma rigidez muscular e uma mente que nunca desliga."
  },
  {
    id: "pain-3",
    number: "03",
    title: "A Divisão Emocional",
    description: "Seu corpo está na Europa, mas sua cabeça e a culpa estão no Brasil (pelos pais que envelhecem, pela família que ficou). Essa divisão se reflete em insônia e apatia."
  },
  {
    id: "pain-4",
    number: "04",
    title: "A Perda de Identidade",
    description: "Quem é você sem o status que tinha no Brasil? O sofrimento de recomeçar do zero altera sua postura, sua energia e o seu olhar."
  }
];

export const FOR_WHOM_ITEMS: CheckItem[] = [
  {
    id: "check-1",
    text: "Sente um cansaço físico extremo que nenhum sono ou descanso parece resolver."
  },
  {
    id: "check-2",
    text: "Desenvolveu crises de ansiedade, pânico ou sintomas psicossomáticos após imigrar."
  },
  {
    id: "check-3",
    text: "Sente-se profundamente sozinho, mesmo cercado de pessoas ou bem-sucedido financeiramente."
  },
  {
    id: "check-4",
    text: "Não tem tempo a perder com terapias longas e quer algo cirúrgico, que vá direto ao ponto central do seu travamento."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Como funciona a Análise Corporal e Fisiognomia online?",
    answer: "A análise é realizada por videoconferência com excelente iluminação. A fisionomia (traços do rosto), a distribuição de massa muscular, a postura e o formato corporal são observados clinicamente. Cada formato corporal e traço facial reflete o desenvolvimento do sistema nervoso e as defesas emocionais moldadas na infância. Com isso, mapeamos o seu funcionamento inconsciente com alta precisão."
  },
  {
    question: "Moro na Europa. Como ficam os horários das sessões?",
    answer: "Gilsane atende em horários adaptados especialmente para a rotina de expatriados brasileiros que vivem na Europa, Reino Unido e outros fusos horários. Há ampla flexibilidade de horários comerciais e finais de tarde para conciliar com seu trabalho."
  },
  {
    question: "Preciso enviar fotos do meu corpo?",
    answer: "Tudo é feito em ambiente de absoluto sigilo e ética profissional. Em alguns casos estruturados, fotos específicas e padronizadas de rosto ou de corpo podem ser solicitadas (sempre vestindo roupas confortáveis adequadas, como shorts e regata), unicamente para a realização do laudo de análise de traços."
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "Diferente da psicoterapia tradicional que pode durar anos para identificar padrões recorrentes, a Análise Corporal é focada e cirúrgica. No primeiro encontro de devolução, você já recebe o diagnóstico exato dos seus traços e as chaves práticas para destravar suas dores e problemas atuais."
  },
  {
    question: "O atendimento é sigiloso?",
    answer: "Sim. O atendimento segue rigorosos padrões de confidencialidade da clínica analítica, respeitando totalmente a sua privacidade e segurança dos seus dados."
  }
];

export const COUNTRY_OPTIONS: CountryOption[] = [
  { code: "PT", name: "Portugal", flag: "🇵🇹" },
  { code: "IE", name: "Irlanda", flag: "🇮🇪" },
  { code: "UK", name: "Reino Unido", flag: "🇬🇧" },
  { code: "DE", name: "Alemanha", flag: "🇩🇪" },
  { code: "FR", name: "França", flag: "🇫🇷" },
  { code: "IT", name: "Itália", flag: "🇮🇹" },
  { code: "CH", name: "Suíça", flag: "🇨🇭" },
  { code: "OTHER", name: "Outro país na Europa", flag: "🇪🇺" },
];

export const SYMPTOM_OPTIONS = [
  { id: "symp_pain", label: "Dores Físicas & Tensão Muscular (costas, estômago, pescoço)" },
  { id: "symp_anxiety", label: "Ansiedade Constante & Insônia severa" },
  { id: "symp_guilt", label: "Culpa & Sentimento de divisão entre Brasil e Exterior" },
  { id: "symp_identity", label: "Perda de Identidade & Esgotamento emocional" }
];
