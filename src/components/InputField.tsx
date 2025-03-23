import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

interface InputFieldProps {
  inputId: string;
  label: string;
  rules?: RegisterOptions;
  control: Control<FieldValues, unknown>;
  type?: string;
}

export default function InputField({
  inputId,
  label,
  rules,
  control,
  type,
}: InputFieldProps) {
  return (
    <Controller
      name={inputId}
      control={control}
      rules={rules}
      render={({ field: { name, onBlur, onChange, ref, value } }) => (
        <>
          <label htmlFor={name}>{label}</label>
          <input
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            type={type}
            name={name}
            id={name}
            ref={ref}
          />
        </>
      )}
    />
  );
}
