import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import ItemPlan from "./ItemPlan";
import Button from "./Button";

interface Feature {
  text: string;
  included: boolean;
}

interface CardPlanProps {
  title: string;
  price: string;
  features: Feature[];
}

export default function CardPlan({ title, price, features }: CardPlanProps) {
  return (
    <div className="bg-black p-8 rounded-xl flex flex-col gap-3 items-center transition-transform">
      <h3 className="text-white text-2xl font-bold mb-2">
        {title} - {price}
      </h3>

      <div className="flex flex-col justify-center items-start w-full gap-2">
        {features.map((feature, index) => (
          <ItemPlan
            key={index}
            icon={
              feature.included ? (
                <AiOutlineCheckCircle className="text-lime-400" />
              ) : (
                <AiOutlineCloseCircle className="text-red-500" />
              )
            }
            value={feature.text}
          />
        ))}
      </div>

      <div className="mt-auto">
        <Button variant="primary" text="MATRICULE-SE" />
      </div>
    </div>
  );
}
