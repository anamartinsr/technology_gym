import { TimerIcon } from "lucide-react";

interface ItemTimeProps {
  day: string;
  time: string;
}

export default function ItemTime({ day, time }: ItemTimeProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <p className="text-white font-bold">{day}</p>

      <div className="flex flex-row justify-center items-center gap-4">
        <span className="text-white font-bold">
          <TimerIcon size={17} />
        </span>
        <p className="text-white font-bold">{time}</p>
      </div>
    </div>
  );
}
