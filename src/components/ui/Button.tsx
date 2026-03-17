import { useNavigate } from "react-router-dom";
interface ButtonProps {
  variant: "primary" | "secondary" | "enrollment" | "plan";
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  to?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const styles = {
  primary:
    "bg-(--primary-color) text-(--secondary-color) hover:bg-white hover:text-(--secondary-color)",
  secondary:
    "bg-(--secondary-color) text-(--primary-color) hover:bg-zinc-900 hover:text-(--primary-color)",
  enrollment:
    "bg-(--primary-color) text-(--secondary-color) hover:bg-(--secondary-color) hover:text-white",
  plan: "bg-(--primary-color) text-(--secondary-color) hover:bg-(--secondary-color) hover:text-white",
};

export default function Button({
  variant = "primary",
  text,
  onClick,
  type = "button",
  to,
  disabled = false,
}: ButtonProps) {
  const navigate = useNavigate();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (onClick) onClick(e);
    if (to) navigate(to);
  }
  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-full cursor-pointer sm:w-auto font-bold py-3 px-6 rounded-md shadow-lg hover:scale-105 transition focus-visible:outline-none ${styles[variant]} disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
