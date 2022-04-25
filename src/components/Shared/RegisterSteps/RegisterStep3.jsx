import React, { useState } from "react";
import { client } from "../../../services/axios";
import { Form, Input, Button, message } from "antd";

function RegisterStep3({ number, setStep, setModal }) {
  //loading state when button is clicked
  const [loading, setLoading] = useState(false);

  // Step 3
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const { name, password, phone_number } = values;
      const { data } = await client.post(`/users/users/register/`, {
        phone_number,
        name,
        token,
        password,
      });
      setStep(4);

      localStorage.setItem("user", JSON.stringify(data.user_data));
      console.log("Received values of form: ", data);
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
    <div className="login__step3">
      <Form name="normal_login" onFinish={onFinish}>
        {/* Phone number */}
        <Form.Item
          name="phone_number"
          label="Phone"
          initialValue={number}
          rules={[{ required: true, message: "Phone number required" }]}
        >
          <Input disabled placeholder="Username" />
        </Form.Item>

        {/* Name */}
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please write password" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        {/* Password */}
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please write password" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        {/* Confirm password */}
        <Form.Item
          name="confirm"
          label="Confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Not match!"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm your password" />
        </Form.Item>

        <Form.Item className="login-form-button">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Register now
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegisterStep3;
