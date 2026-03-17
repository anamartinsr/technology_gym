import type { JSX } from "react";
import Button from "@/components/ui/Button";
import TimeSlot from "@/components/Sections/Schedule/TimeSlot";
import Text from "@/components/common/Text";
import { scheduleSlots } from "@/data/schedule";
import { UI_TEXT } from "@/constants/uiText";

export default function Schedule(): JSX.Element {
  return (
    <div
      id="time"
      className="bg-(--secondary-color) w-full flex flex-col items-center p-6"
    >
      <p className="text-4xl md:text-5xl text-(--primary-color) font-bold mb-6">
        Horários
      </p>

      <div className="max-w-4xl w-full flex flex-col gap-7 items-center">
        <Text
          pColor="text-white"
          spanColor="text-(--primary-color)"
          before="Escolha o melhor "
          textSpan="horário"
          after=" para treinar e mantenha sua rotina sem complicações."
        />

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-32 justify-between">
          {scheduleSlots.map((slot) => (
            <TimeSlot key={slot.day} day={slot.day} time={slot.time} />
          ))}
        </div>

        <Button text={UI_TEXT.cta.joinGym} variant="primary" to="/enrollment" />
      </div>
    </div>
  );
}
