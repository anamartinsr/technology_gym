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
        className={`border rounded p-2 w-full text-(--gray) bg-white focus:outline-none focus:ring-4 focus:ring-(--primary-color)/30 focus:border-(--primary-color)
        ${error ? "border-(--red)" : "border-(--gray-light)"}`}
      />

      {error && <span className="text-(--red) text-sm">{error.message}</span>}
    </div>
  );
}
