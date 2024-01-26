import { useFormContext } from "react-hook-form";
type TInputProps = {
  type: string;
  name: string;
  label: string;
};
const GInput = ({ type, name, label }: TInputProps) => {
  const { register } = useFormContext();
  return <input type={type} id={name} {...register(name)} />;
};

export default GInput;
