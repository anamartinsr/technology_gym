import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import IconText from "./IconText";
import Button from "../../ui/Button";

interface Feature {
  text: string;
  included: boolean;
}

interface CardProps {
  title: string;
  price: string;
  features: Feature[];
}

export default function Card({ title, price, features }: CardProps) {
  return (
    <div className="bg-(--secondary-color) p-8 rounded-xl flex flex-col gap-3 items-center transition-transform">
      <h3 className="text-white text-2xl font-bold mb-2">
        {title} - {price}
      </h3>

      <div className="flex flex-col justify-center items-start w-full gap-2">
        {features.map((feature, index) => (
          <IconText
            key={index}
            icon={
              feature.included ? (
                <AiOutlineCheckCircle className="text-(--primary-color)" />
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
