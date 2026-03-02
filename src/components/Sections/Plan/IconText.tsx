import type React from "react";

interface IconTextProps {
  icon: React.ReactNode;
  value: string;
  featured?: boolean;
}

export default function IconText({
  icon,
  value,
  featured = false,
}: IconTextProps) {
  return (
    <div className="flex flex-row items-start gap-3">
      <span className="mt-0.5 flex-shrink-0">{icon}</span>
      <p
        className={`${featured ? "text-(--secondary-color)" : "text-(--secondary-color)"} break-words text-sm leading-relaxed`}
      >
        {value}
      </p>
    </div>
  );
}
