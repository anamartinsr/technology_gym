import type { JSX } from "react";
import PlanCard from "@/components/Sections/Plan/PlanCard";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import { plans } from "@/data/plans";
import { UI_TEXT } from "@/constants/uiText";

export default function Plan(): JSX.Element {
  return (
    <div
      id="plan"
      className="bg-(--primary-color) p-8 md:p-12 flex flex-col items-center"
    >
      <Title variant="secondary" text={UI_TEXT.sections.plans} />
      <Text
        pColor="text-(--secondary-color)"
        spanColor="text-white"
        before="Escolha o plano que se encaixa melhor para você e comece sua jornada rumo a uma vida mais saudável e ativa !"
      />
      <section className="flex flex-col lg:flex-row justify-center items-stretch mt-8 gap-6 w-full max-w-7xl">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </section>
    </div>
  );
}
