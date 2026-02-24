export interface Plan {
  id: string;
  title: string;
  price: string;
  features: {
    text: string;
    included: boolean;
  }[];
}

export const plans: Plan[] = [
  {
    id: "fitness",
    title: "Plano Fitness",
    price: "R$ 99/mês",
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
    price: "R$ 199/mês",
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
    price: "R$ 249/mês",
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
