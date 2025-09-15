interface SelectFieldProps {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  required?: boolean;
}

export default function SelectField({
  label,
  id,
  options,
  required = false,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-(--secondary-color)">
        {label}
      </label>
      <select
        id={id}
        required={required}
        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
      >
        <option value="">Selecione</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
