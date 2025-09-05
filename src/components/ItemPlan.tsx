import type React from "react";

interface ItemPlanProps {
  icon: React.ReactNode;
  value: string;
}

export default function ItemPlan({ icon, value }: ItemPlanProps) {
  return (
    <div className="flex flex-row justify-center items-center gap-3">
      <span>{icon}</span>
      <p className="text-white break-words">{value}</p>
    </div>
  );
}
