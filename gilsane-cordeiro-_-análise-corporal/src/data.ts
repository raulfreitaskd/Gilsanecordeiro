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
    description: "Você se obrigou a ser forte demais para aguentar a burocracia, o frio e a distância. Agora, suas dores existeciais estão te dando a sensação de que você não deveria ter arriscado, ou ainda que esse país não te acolheu como deveria, você está sempre sendo traído (a), humilhado(a), muitas vezes parece que querem te expulsar daí."
  },
  {
    id: "pain-2",
    number: "02",
    title: "A Ansiedade de \"Dar Certo\"",
    description: "O medo constante de não ser bom o suficiente no trabalho e para os que ficaram no país de origem e o medo de falhar no novo país gera ansiedade e uma mente que nunca desliga."
  },
  {
    id: "pain-3",
    number: "03",
    title: "A Divisão Emocional",
    description: "Seu corpo está na Europa, mas sua cabeça e a culpa estão no Brasil (pelos pais que envelhecem, pela família que ficou). Essa divisão te sabota todos dias."
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
    question: "Como funciona a Análise Corporal online?",
    answer: "A análise é realizada por videoconferência com excelente iluminação. Serão analisadas 5 partes do seu corpo através de observação profissional e critério de pontuação. Onde seus traços serão identificados por porcentagem."
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
    answer: "Diferente da terapia tradicional que pode durar anos para identificar padrões recorrentes, a Análise Corporal é focada e cirúrgica. No primeiro encontro de devolução, você já recebe o diagnóstico exato dos seus traços e as chaves práticas para destravar suas dores e problemas atuais."
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

export interface BodyShape {
  id: "esquizoide" | "oral" | "psicopata" | "masoquista" | "rigido";
  name: string;
  geometry: string;
  subtitle: string;
  shapeType: "rectangle" | "circle" | "triangle" | "square" | "hourglass";
  pain: string;
  symptoms: string[];
  phrase: string;
}

export const BODY_SHAPES: BodyShape[] = [
  {
    id: "esquizoide",
    name: "Esquizoide",
    geometry: "Retângulo",
    subtitle: "Corpo mais magro, distante, \"desconectado\"",
    shapeType: "rectangle",
    pain: "Rejeição profunda (existencial)",
    symptoms: [
      "Sensação de não pertencimento",
      "Dificuldade de se conectar emocionalmente",
      "Vive muito no mundo interno (mente)",
      "Evita contato profundo com pessoas",
      "Medo de invasão emocional",
      "Pode parecer frio, mas é proteção"
    ],
    phrase: "👉 Se protege se afastando antes mesmo de tentar."
  },
  {
    id: "oral",
    name: "Oral",
    geometry: "Círculo",
    subtitle: "Formato mais arredondado / oval",
    shapeType: "circle",
    pain: "Abandono",
    symptoms: [
      "Sensação de vazio constante",
      "Carência emocional, mesmo rodeada de pessoas",
      "Faz muito pelos outros esperando receber de volta",
      "Dificuldade em se sentir preenchida",
      "Medo de ficar sozinha",
      "Busca amor fora, mas não se sente saciada"
    ],
    phrase: "👉 É como um copo que nunca parece cheio."
  },
  {
    id: "psicopata",
    name: "Psicopata",
    geometry: "Triângulo Invertido",
    subtitle: "Corpo mais estruturado, postura firme",
    shapeType: "triangle",
    pain: "Rejeição / traição",
    symptoms: [
      "Necessidade de controle",
      "Dificuldade em confiar nas pessoas",
      "Medo de ser enganado ou passado para trás",
      "Postura forte por fora, mas vulnerável por dentro",
      "Pode manipular para não perder o controle",
      "Evita demonstrar fraqueza"
    ],
    phrase: "👉 Prefere controlar o jogo a correr o risco de perder."
  },
  {
    id: "masoquista",
    name: "Masoquista",
    geometry: "Quadrado",
    subtitle: "Corpo mais \"compacto\", travado",
    shapeType: "square",
    pain: "Humilhação",
    symptoms: [
      "Engole sentimentos para não gerar conflito",
      "Sensação de injustiça (\"eu faço tudo e ninguém reconhece\")",
      "Dificuldade em dizer não",
      "Se coloca em segundo plano",
      "Carrega peso emocional e responsabilidade excessiva",
      "Tendência a se sacrificar pelos outros"
    ],
    phrase: "👉 Vive com o freio de mão puxado na própria vida."
  },
  {
    id: "rigido",
    name: "Rígido",
    geometry: "Ampulheta",
    subtitle: "Corpo proporcional, mais \"certinho\"",
    shapeType: "hourglass",
    pain: "Rejeição afetiva (principalmente amorosa)",
    symptoms: [
      "Busca perfeição para ser amado",
      "Dificuldade em lidar com erros e falhas",
      "Controle emocional elevado",
      "Competitivo, quer ser reconhecido",
      "Medo de não ser suficiente",
      "Pode travar sentimentos para não se expor"
    ],
    phrase: "👉 Acredita que precisa ser impecável para merecer amor."
  }
];

