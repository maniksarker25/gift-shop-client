import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
type TInputProps = {
  type: string;
  name: string;
  label: string;
};
const GInput = ({ type, name, label }: TInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div style={{ marginBottom: "15px" }}>
      {label ? <p style={{ marginBottom: "5px" }}>{label}</p> : null}
      <Controller
        name={name}
        control={control}
        rules={{ required: `Please enter ${label || name}` }}
        render={({ field }) => (
          <div>
            <Input
              style={{ width: "350px" }}
              {...field}
              type={type}
              id={name}
            />
            {errors[name] && (
              <p style={{ color: "red" }}>
                {(errors[name]?.message as string) || "This field is required"}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default GInput;
