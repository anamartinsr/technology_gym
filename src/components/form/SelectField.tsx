import type { FieldError } from "react-hook-form";

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: FieldError;
}

export default function SelectField({
  label,
  id,
  options,
  error,
  ...props
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-(--secondary-color)">
        {label}
      </label>

      <select
        id={id}
        {...props}
        className={`border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-(--primary-color)
        ${error ? "border-red-500" : "border-gray-300"}`}
      >
        <option value="">Selecione</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
}
