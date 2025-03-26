import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface FielProps {
  name: string;
  rules?: RegisterOptions;
  autoComplete?: "" | "off" | "on";
  type?:
    | "date"
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | "search";
  hidden?: boolean;
  placeholder: string;
  label: string;
}

export default function Field({
  name = "",
  rules = {},
  autoComplete = "off",
  type = "text",
  hidden = false,
  placeholder = "",
  label = "",
}: FielProps) {
  const methods = useFormContext();
  return (
    <label className="form-control w-full max-w-xs">
      <Controller
        name={name}
        {...methods}
        rules={rules}
        render={({
          field: { name, onBlur, onChange, ref, value, disabled },
          formState,
        }) => (
          <>
            <div className="label">
              <span className="label-text">{label}</span>
              {/* <span className="label-text-alt">Top Right label</span> */}
            </div>
            <input
              autoComplete={autoComplete}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
              value={value}
              disabled={disabled}
              type={type}
              hidden={hidden}
              placeholder={`${placeholder}${rules.required ? "*" : ""}`}
              className={`input input-bordered w-80 max-w-xs ${
                formState.errors[name] ? "input-error" : ""
              }`}
            />
            {/* <div className="label"> */}
            {/* <span className="label-text-alt">Bottom Left label</span> */}
            {/* <span className="label-text-alt">Bottom Right label</span> */}
            {/* </div> */}
          </>
        )}
      />
      {methods.formState.touchedFields[name] && name !== "" && (
        <div className="">
          <ErrorMessage
            errors={methods.formState.errors}
            name={name}
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <div
                      key={type}
                      className="flex w-fit flex-row gap-2 py-1 pl-2 text-sm text-red-500 transition-opacity duration-300 ease-in-out">
                      <p>•</p>
                      <p className="border-b border-b-red-500">{message}</p>
                    </div>
                  ))
                : null;
            }}
          />
        </div>
      )}
    </label>
  );
}
