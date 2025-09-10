interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
}

const styles = {
  primary: "bg-[#9cff1e] text-black hover:bg-gray-100 hover:text-black",
  secondary: "bg-black text-[#9cff1e] hover:bg-gray-100 hover:text-black",
  dark: "bg-gray-800 text-white hover:bg-gray-600 hover:text-white",
};

export default function Button({ variant = "primary", text }: ButtonProps) {
  return (
    <button
      className={`w-full sm:w-auto font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition ${styles[variant]}`}
    >
      {text}
    </button>
  );
}
