import { CardPlanFitness, CardPlanPower, CardPlanVip } from "./CardPlan";

export default function Plan() {
  return (
    <div className="bg-black">
      <h2 className="text-white font-bold text-center text-3xl">PLANOS</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-2 ">
        <CardPlanFitness />
        <CardPlanPower />
        <CardPlanVip />
      </div>
    </div>
  );
}
