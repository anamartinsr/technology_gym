import { useNavigate } from "react-router-dom";
interface ButtonProps {
  variant: "primary" | "secondary" | "enrollment";
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  to?: string;
}

const styles = {
  primary:
    "bg-(--primary-color) text-(--secondary-color) hover:bg-gray-100 hover:text-(--secondary-color)",
  secondary:
    "bg-(--secondary-color) text-(--primary-color) hover:bg-gray-100 hover:text-(--secondary-color)",
  enrollment:
    "bg-(--primary-color) text-(--secondary-color) hover:bg-(--secondary-color) hover:text-white",
};

export default function Button({
  variant = "primary",
  text,
  onClick,
  to,
}: ButtonProps) {
  const navigate = useNavigate();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (onClick) onClick(e);
    if (to) navigate(to);
  }
  return (
    <button
      className={`w-full cursor-pointer sm:w-auto font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition ${styles[variant]}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
