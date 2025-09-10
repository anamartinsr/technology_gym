import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import ItemPlan from "./ItemPlan";

export function CardPlanFitness() {
  return (
    <div className="bg-[#949494] p-8 rounded-xl m-4 flex flex-col items-center">
      <h3 className="text-white text-2xl font-bold mb-4">
        Plano Fitness - R$ 99/mês
      </h3>
      <div className="flex flex-col justify-center items-start w-full gap-2">
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Acesso ilimitado à academia (horário comercial)"
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Aulas em grupo "
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Uso de todos os equipamentos de musculação e cardio"
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Acompanhamento básico "
        />

        <ItemPlan
          icon={<AiOutlineCloseCircle color="red" />}
          value="Acompanhamento com personal trainer"
        />
        <ItemPlan
          icon={<AiOutlineCloseCircle color="red" />}
          value="Aulas especializadas"
        />
        <ItemPlan
          icon={<AiOutlineCloseCircle color="red" />}
          value="Acesso a áreas VIP ou exclusivos"
        />
        <ItemPlan
          icon={<AiOutlineCloseCircle color="red" />}
          value="Descontos em eventos ou workshops da academia"
        />
      </div>
    </div>
  );
}

export function CardPlanPower() {
  return (
    <div className="bg-[#949494] p-8 rounded-xl m-4 flex flex-col items-center">
      <h3 className="text-white text-2xl font-bold mb-4">
        Plano Power - R$ 199/mês
      </h3>
      <div className="flex flex-col justify-center items-start w-full gap-2">
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Acesso ilimitado à academia (horário comercial)"
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Aulas em grupo"
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Uso de todos os equipamentos de musculação e cardio"
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="3 sessões de personal trainer por semana"
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Acesso a aulas especializadas"
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Desconto em eventos e workshops exclusivos"
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Acesso a áreas VIP da academia"
        />

        <ItemPlan
          icon={<AiOutlineCloseCircle color="red" />}
          value="Locker exclusivo"
        />
      </div>
    </div>
  );
}

export function CardPlanVip() {
  return (
    <div className="bg-[#949494] p-8 rounded-xl m-4 flex flex-col items-center">
      <h3 className="text-white text-2xl font-bold mb-4">
        Plano Vip - R$ 249/mês
      </h3>
      <div className="flex flex-col justify-center items-start w-full gap-2">
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Acesso ilimitado à academia (horário comercial)"
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Aulas em grupo"
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Uso de todos os equipamentos de musculação e cardio"
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="5 sessões de personal trainer por semana"
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Acesso a aulas especializadas"
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Desconto em eventos e workshops exclusivos"
        />
        <ItemPlan
          icon={<AiOutlineCheckCircle color="limegreen" />}
          value="Acesso a áreas VIP da academia"
        />

        <ItemPlan
          icon={<AiOutlineCloseCircle color="limegreen" />}
          value="Locker exclusivo e estacionamento VIP"
        />

        <ItemPlan
          icon={<AiOutlineCloseCircle color="limegreen" />}
          value="Horário preferencial para aulas e serviços"
        />
      </div>
    </div>
  );
}
