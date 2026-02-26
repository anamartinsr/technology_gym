import type { JSX } from "react";
import PlanCard from "./PlanCard";
import Text from "../../common/Text";
import Title from "../../common/Title";
import { plans } from "../../../data/plans";

export default function Plan(): JSX.Element {
  return (
    <div
      id="plan"
      className="bg-(--primary-color) p-8 flex flex-col items-center"
    >
      <Title variant="secondary" text="Planos" />
      <Text
        pColor="text-(--secondary-color)"
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
