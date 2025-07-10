import React from "react";

// Define the types for our component's props
type FormInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
  className?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  as = "input",
  className = "",
}) => {
  const baseClasses =
    "w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-700 transition-shadow";

  const InputComponent = as === "textarea" ? "textarea" : "input";

  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <InputComponent
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${baseClasses} ${as === "textarea" ? "min-h-32" : ""}`}
      />
    </div>
  );
};

export default FormInput;
