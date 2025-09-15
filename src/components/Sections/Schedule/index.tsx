import type { JSX } from "react";
import Button from "../../ui/Button";
import TimeSlot from "./TimeSlot";
import Text from "../../common/Text";

export default function Schedule(): JSX.Element {
  return (
    <div id="time" className="bg-black w-full flex flex-col items-center p-6">
      <p className="text-4xl md:text-5xl text-[#9cff1e] font-bold mb-6">
        Horários
      </p>

      <div className="max-w-4xl w-full flex flex-col gap-7 items-center">
        <Text
          pColor="text-white"
          spanColor="text-[#9cff1e]"
          before="Escolha o melhor "
          textSpan="horário"
          after=" para treinar e mantenha sua rotina sem complicações."
        />

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-32 justify-between">
          <TimeSlot day="Segunda - Sexta" time="05:00 / 00:00" />

          <TimeSlot day="Sábado" time="05:00 / 15:00" />

          <TimeSlot day="Domingo e Feriados" time="05:00 / 14:00" />
        </div>

        <Button text="VEM PRA TECHNOLOGY GYM" variant="primary" />
      </div>
    </div>
  );
}
