interface TitleProps {
  variant: "primary" | "secondary";
  text: string;
}

const styles = {
  primary: "text-[#9cff1e]",
  secondary: "text-black ",
};

export default function Title({ text, variant }: TitleProps) {
  return (
    <h2
      className={`text-4xl text-center md:text-5xl text-[#9cff1e] font-bold mb-6 ${styles[variant]}`}
    >
      {text}
    </h2>
  );
}
