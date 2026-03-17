import type { ElementType } from "react";

interface TitleProps {
  variant: "primary" | "secondary";
  text: string;
  as?: ElementType;
}

const styles = {
  primary: "text-(--primary-color)",
  secondary: "text-(--secondary-color) ",
};

export default function Title({ text, variant, as: Tag = "h2" }: TitleProps) {
  return (
    <Tag
      className={`text-4xl md:text-5xl text-(--primary-color) font-bold ${styles[variant]}`}
    >
      {text}
    </Tag>
  );
}
