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
        className={`border rounded p-2 w-full text-(--gray) bg-white focus:outline-none focus:ring-4 focus:ring-(--primary-color)/30 focus:border-(--primary-color)
        ${error ? "border-(--red)" : "border-(--gray-light)"}`}
      >
        <option value="">Selecione</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <span className="text-(--red) text-sm">{error.message}</span>}
    </div>
  );
}
