import type { FieldError } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export default function InputField({
  label,
  id,
  error,
  ...props
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-(--secondary-color)">
        {label}
      </label>

      <input
        id={id}
        {...props}
        className={`border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-(--primary-color)
        ${error ? "border-red-500" : "border-gray-300"}`}
      />

      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
}
