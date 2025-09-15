interface TitleProps {
  variant: "primary" | "secondary";
  text: string;
}

const styles = {
  primary: "text-(--primary-color)",
  secondary: "text-(--secondary-color) ",
};

export default function Title({ text, variant }: TitleProps) {
  return (
    <h2
      className={`text-4xl md:text-5xl text-(--primary-color) font-bold ${styles[variant]}`}
    >
      {text}
    </h2>
  );
}
