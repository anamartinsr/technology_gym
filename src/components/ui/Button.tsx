interface ButtonProps {
  variant: "primary" | "secondary" | "enrollment";
  text: string;
}

const styles = {
  primary:
    "bg-(--primary-color) text-(--secondary-color) hover:bg-gray-100 hover:text-(--secondary-color)",
  secondary:
    "bg-(--secondary-color) text-(--primary-color) hover:bg-gray-100 hover:text-(--secondary-color)",
  enrollment:
    "bg-(--primary-color) text-(--secondary-color) hover:bg-(--secondary-color) hover:text-white",
};

export default function Button({ variant = "primary", text }: ButtonProps) {
  return (
    <button
      className={`w-full cursor-pointer sm:w-auto font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition ${styles[variant]}`}
    >
      {text}
    </button>
  );
}
