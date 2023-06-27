import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import FormButtonDivider from "./GeneralUI/FormButtonDivider/FormButtonDivider";
import FormSubmitButton from "./GeneralUI/FormSubmitButton/FormSubmitButton";
import ContinueWithGoogle from "./GeneralUI/ContinueWithGoogle/ContinueWithGoogle";
import { getRequrieRules, getValidateEmailRules } from "../util-fn/form-util";
import { Typography } from "antd";
const { Paragraph } = Typography;

export default function LoginForm() {
  const formSumbitHandler = async (data) => {
    console.log(data);
    const res = await fetch("https://localhost:3000/signin", {
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      return;
    }
  };
  return (
    <div className="position-relative border border-gray-300 px-4 py-6 rounded-lg min-w-[450px] max-w-[450px]">
      <h2 className="text-center text-xl italic mb-6">
        Remember everything important.
      </h2>
      <ContinueWithGoogle>Continue With Google</ContinueWithGoogle>
      <FormButtonDivider />

      <Form layout="vertical" onFinish={formSumbitHandler}>
        <Form.Item
          label="Email Address"
          name={"emailAddress"}
          rules={[getRequrieRules("Email"), getValidateEmailRules()]}
        >
          <Input placeholder="Enter your email address" />
        </Form.Item>

        <Form.Item
          label="Password"
          name={"password"}
          rules={[getRequrieRules("Password")]}
        >
          <Input placeholder="Enter your password" />
        </Form.Item>
        <FormSubmitButton>REGISTER NOW</FormSubmitButton>
      </Form>
      <Paragraph className="mb-0 mt-3 text-center">
        Already have an account?
        <Link className="ms-1" to={"/login"}>
          Login now
        </Link>
      </Paragraph>
    </div>
  );
}
