interface InputFieldProps {
  label: string;
  type?: string;
  id: string;
  required?: boolean;
  placeholder?: string;
}

export default function InputField({
  label,
  type = "text",
  id,
  required = false,
  placeholder = "",
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-black">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
      />
    </div>
  );
}
