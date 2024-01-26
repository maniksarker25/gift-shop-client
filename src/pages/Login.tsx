import { Button } from "antd";
import GForm from "../components/form/GForm";
import GInput from "../components/form/GInput";
import { FieldValues } from "react-hook-form";

const Login = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <GForm onSubmit={onSubmit}>
      <GInput type={"email"} name={"email"} label={"Email"} />
      <GInput type={"password"} name={"password"} label={"Password"} />
      <Button htmlType="submit">Login</Button>
    </GForm>
  );
};

export default Login;
