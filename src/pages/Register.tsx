import { Button, Row } from "antd";
import GForm from "../components/form/GForm";
import GInput from "../components/form/GInput";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Row style={{ height: "100vh" }} justify={"center"} align={"middle"}>
      <GForm onSubmit={onSubmit}>
        <GInput type={"fullName"} name={"fullName"} label={"Full Name"} />
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
            Register
          </Button>
          <p style={{ fontSize: "16px", marginTop: "4px" }}>
            Already have account?{" "}
            <Link to={"/login"} style={{ color: "#1677FF", cursor: "pointer" }}>
              Login
            </Link>
          </p>
        </div>
      </GForm>
    </Row>
  );
};

export default Register;
