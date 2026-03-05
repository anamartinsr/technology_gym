import type { FieldError } from "react-hook-form";

interface CheckboxFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export default function CheckboxField({
  label,
  id,
  error,
  ...props
}: CheckboxFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="flex items-center gap-2 cursor-pointer text-(--secondary-color)">
        <input type="checkbox" id={id} {...props} />
        {label}
      </label>

      {error && <span className="text-(--red) text-sm">{error.message}</span>}
    </div>
  );
}
