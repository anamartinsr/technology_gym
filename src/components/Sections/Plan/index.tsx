import type { JSX } from "react";
import PlanCard from "./PlanCard";
import Text from "../../common/Text";
import Title from "../../common/Title";

export default function Plan(): JSX.Element {
  const plans = [
    {
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

  return (
    <div
      id="plan"
      className="bg-[#9cff1e] min-h-screen p-8 flex flex-col items-center"
    >
      <Title variant="secondary" text="Planos" />
      <Text
        pColor="text-black"
        spanColor="text-white"
        before="Escolha o plano que se encaixa melhor para você e comece sua jornada rumo a uma vida mais"
        textSpan=" saudável e ativa"
        after=" !"
      />
      <section className="flex flex-col md:flex-row justify-center mt-4 gap-6">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </section>
    </div>
  );
}
