import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import IconText from "@/components/Sections/Plan/IconText";
import Button from "@/components/ui/Button";
import type { Plan } from "@/data/plans";

interface PlanCardProps {
  plan: Plan;
}

export default function Card({ plan }: PlanCardProps) {
  const {
    title,
    subtitle,
    price,
    period,
    featured = false,
    benefitsNote,
    features,
  } = plan;

  const cardClasses = featured
    ? "bg-gradient-to-br from-(--primary-color) to-white text-(--secondary-color)"
    : "bg-(--white) text-(--secondary-color) border border-gray-200";

  return (
    <div
      className={`${cardClasses} p-8 rounded-2xl flex flex-col gap-4 transition-transform shadow-lg relative max-w-sm w-full`}
    >
      {featured && (
        <div className="absolute top-1 right-2 bg-(--secondary-color)/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
          <span className="text-(--white) text-sm font-semibold">
            O melhor para você
          </span>
          <FaStar className="text-(--primary-color) text-sm" />
        </div>
      )}

      <div className="text-left">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p
          className={`text-sm ${featured ? "text-(--secondary-color)/90" : "text-(--gray)"}`}
        >
          {subtitle}
        </p>
      </div>

      <div className="text-left">
        <div className="flex items-end gap-1">
          <span className="text-5xl font-bold">{price}</span>
          <span className="text-lg mb-2">{period}</span>
        </div>
        <p
          className={`text-xs mt-2 ${featured ? "text-(--secondary-color)/80" : "text-(--gray)"}`}
        >
          * Dependendo da unidade os valores podem variar em relação a condições
          promocionais e taxas.
        </p>
      </div>

      <Button text="Matricular" variant="plan" to="/enrollment" />

      <p
        className={`text-center text-sm ${featured ? "text-(--secondary-color)/80" : "text-(--gray)"}`}
      >
        Fidelidade de 12 meses
      </p>

      <div className="text-left mt-4">
        <h4 className="font-bold text-lg mb-3">Seus benefícios</h4>
        {benefitsNote && (
          <p
            className={`text-sm mb-3 ${featured ? "text-(--secondary-color)/80" : "text-(--gray)"}`}
          >
            {benefitsNote}
          </p>
        )}
        <div className="flex flex-col gap-2">
          {features.map((feature, index) => (
            <IconText
              key={index}
              icon={
                feature.included ? (
                  <AiOutlineCheckCircle className="text-(--gree) text-xl" />
                ) : (
                  <AiOutlineCloseCircle className="text-red-500 text-xl" />
                )
              }
              value={feature.text}
              featured={featured}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
