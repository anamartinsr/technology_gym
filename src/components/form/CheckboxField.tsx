interface CheckboxFieldProps {
  label: string;
  id: string;
  required?: boolean;
}

export default function CheckboxField({
  label,
  id,
  required = false,
}: CheckboxFieldProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer text-(--secondary-color)">
      <input type="checkbox" id={id} required={required} className="w-4 h-4" />
      {label}
    </label>
  );
}
