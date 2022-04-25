import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { client } from "../../services/axios";

const LoginForm = ({ setLogin, setModal }) => {
  //loading state when button is clicked
  const [loading, setLoading] = useState(false);

  // Step 1
  const Login = async (user) => {
    setLoading(true);
    try {
      const { data } = await client.post(`/users/login`, user);
      localStorage.setItem("user", JSON.stringify(data.user_data));
      localStorage.setItem("token", data.access);
      message.success("You have succefully login !");
      setLogin(true);
      setTimeout(() => {
        setModal(false);
        setStep(1);
      }, 3000);
    } catch {
      message.error("Something went wrong, try again !");
    }
    setLoading(false);
  };

  return (
    <Form onFinish={Login} autoComplete="on">
      <Form.Item
        label="Phone"
        name="phone_number"
        rules={[{ required: true, message: "Phone number required" }]}
      >
        <Input placeholder="Phone number" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item className="login-form-button">
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={loading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
