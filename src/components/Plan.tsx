import { CardPlanFitness, CardPlanPower, CardPlanVip } from "./CardPlan";

export default function Plan() {
  return (
    <div className="bg-lime-400 grid grid-cols-1 sm:grid-cols-3 gap-2 ">
      <CardPlanFitness />
      <CardPlanPower />
      <CardPlanVip />
    </div>
  );
}
