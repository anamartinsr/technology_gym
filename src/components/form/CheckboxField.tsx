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
        <input
          type="checkbox"
          id={id}
          {...props}
          className="h-4 w-4 rounded border-(--gray-light) text-(--primary-color)"
        />
        {label}
      </label>

      {error && <span className="text-(--red) text-sm">{error.message}</span>}
    </div>
  );
}
