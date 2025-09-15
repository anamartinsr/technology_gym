import type React from "react";

interface IconTextProps {
  icon: React.ReactNode;
  value: string;
}

export default function IconText({ icon, value }: IconTextProps) {
  return (
    <div className="flex flex-row justify-center items-center gap-3">
      <span>{icon}</span>
      <p className="text-white break-words">{value}</p>
    </div>
  );
}
