import { TimerIcon } from "lucide-react";

interface ItemTimeProps {
  day: string;
  time: string;
}

export default function ItemTime({ day, time }: ItemTimeProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <p className="font-bold text-[#9cff1e]">{day}</p>

      <div className="flex flex-row justify-center items-center gap-4 leading-relaxed">
        <span className="text-white font-bold">
          <TimerIcon size={17} />
        </span>
        <p className="text-lg text-white md:text-xl">{time}</p>
      </div>
    </div>
  );
}
