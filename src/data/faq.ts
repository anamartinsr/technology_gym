export const faqs = [
  {
    id: "1",
    category: "INFORMAÇÕES",
    question: "Preciso pagar taxa de matrícula?",
    answer:
      "Não, não cobramos taxa de matrícula! Você só paga a mensalidade do plano escolhido. Aproveite nossos planos acessíveis e comece sua transformação sem custos adicionais.",
  },
  {
    id: "3",
    category: "INFORMAÇÕES",
    question: "A academia abre aos domingos?",
    answer:
      "Sim, abrimos aos domingos das 5h às 14h. Aproveite para treinar no seu ritmo e alcançar seus objetivos mesmo nos finais de semana! Verifique a unidade mais próxima para confirmar os horários específicos.",
  },
  {
    id: "4",
    category: "INFORMAÇÕES",
    question: "Quais são os horários de funcionamento?",
    answer:
      "Funcionamos todos os dias das 5h da manhã até 00h. Aos sábados, abrimos às 5h e fechamos às 15h. Verifique a unidade mais próxima para confirmar os horários específicos.",
  },
  {
    id: "5",
    category: "INFORMAÇÕES",
    question: "Posso trazer um acompanhante?",
    answer:
      "Sim! Oferecemos aulas em grupo e você pode trazer um amigo para acompanhar uma aula experimental antes de se matricular. Consulte nossa equipe sobre a melhor opção para você.",
  },
  {
    id: "6",
    category: "INFORMAÇÕES",
    question: "Há personal trainer disponível?",
    answer:
      "Sim, temos personal trainers especializados disponíveis. Você pode contratar um plano adicional de acompanhamento individual. Entre em contato conosco para mais informações e agendamento.",
  },
] as const;

export type FAQ = (typeof faqs)[number];

export interface FAQGroup {
  category: FAQ["category"];
  items: readonly FAQ[];
}
