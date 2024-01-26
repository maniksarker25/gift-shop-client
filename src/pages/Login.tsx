import { Button, Row } from "antd";
import GForm from "../components/form/GForm";
import GInput from "../components/form/GInput";
import { FieldValues } from "react-hook-form";

const Login = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Row style={{ height: "100vh" }} justify={"center"} align={"middle"}>
      <GForm onSubmit={onSubmit}>
        <GInput type={"email"} name={"email"} label={"Email"} />
        <GInput type={"password"} name={"password"} label={"Password"} />
        <div>
          <Button
            style={{
              width: "100%",
              backgroundColor: "#1677FF",
              color: "white",
            }}
            htmlType="submit"
          >
            Login
          </Button>
        </div>
      </GForm>
    </Row>
  );
};

export default Login;
