export interface Plan {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  period: string;
  featured?: boolean;
  benefitsNote?: string;
  features: {
    text: string;
    included: boolean;
  }[];
}

export const plans: Plan[] = [
  {
    id: "fitness",
    title: "Plano Fitness",
    subtitle: "O essencial pra entrar no ritmo.",
    price: "R$ 99",
    period: "/mês",
    features: [
      {
        text: "Acesso ilimitado à academia (horário comercial)",
        included: true,
      },
      { text: "Aulas em grupo", included: true },
      {
        text: "Uso de todos os equipamentos de musculação e cardio",
        included: true,
      },
      { text: "Acompanhamento básico", included: true },
      { text: "Acompanhamento com personal trainer", included: false },
      { text: "Aulas especializadas", included: false },
      { text: "Acesso a áreas VIP ou exclusivos", included: false },
      {
        text: "Descontos em eventos ou workshops da academia",
        included: false,
      },
    ],
  },
  {
    id: "power",
    title: "Plano Power",
    subtitle: "Uma experiência completa!",
    price: "R$ 199",
    period: "/mês",
    featured: true,
    benefitsNote: "Tudo no plano Fitness e Vip",
    features: [
      {
        text: "Acesso ilimitado à academia (horário comercial)",
        included: true,
      },
      { text: "Aulas em grupo", included: true },
      {
        text: "Uso de todos os equipamentos de musculação e cardio",
        included: true,
      },
      { text: "3 sessões de personal trainer por semana", included: true },
      { text: "Acesso a aulas especializadas", included: true },
      { text: "Desconto em eventos e workshops exclusivos", included: true },
      { text: "Acesso a áreas VIP da academia", included: true },
      { text: "Locker exclusivo", included: false },
    ],
  },
  {
    id: "vip",
    title: "Plano Vip",
    subtitle: "Mais benefícios pra ir além do treino.",
    price: "R$ 249",
    period: "/mês",
    benefitsNote: "Tudo no plano Fitness",
    features: [
      {
        text: "Acesso ilimitado à academia (horário comercial)",
        included: true,
      },
      { text: "Aulas em grupo", included: true },
      {
        text: "Uso de todos os equipamentos de musculação e cardio",
        included: true,
      },
      { text: "5 sessões de personal trainer por semana", included: true },
      { text: "Acesso a aulas especializadas", included: true },
      { text: "Desconto em eventos e workshops exclusivos", included: true },
      { text: "Acesso a áreas VIP da academia", included: true },
      { text: "Locker exclusivo e estacionamento VIP", included: true },
      { text: "Horário preferencial para aulas e serviços", included: true },
    ],
  },
];
