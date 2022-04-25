import React, { useState } from "react";
import { client } from "../../../services/axios";
import { Form, Input, Button, message } from "antd";

function RegisterStep2({ number, setStep }) {
  //loading state when button is clicked
  const [loading, setLoading] = useState(false);

  // Step 2
  const checkCode = async (code) => {
    setLoading(true);
    try {
      const { data } = await client.post(`/users/users/check_code/`, {
        phone_number: number,
        ...code,
      });
      message.success("Your code is correct");
      localStorage.setItem("token", data.token);
      setStep(3);
    } catch {
      message.error("Something went wrong, try again !");
    }
    setLoading(false);
  };

  return (
    //   Step 2
    <div className="login__step2">
      <Form name="normal_login" onFinish={checkCode}>
        {/* Phone number */}
        <Form.Item
          name="code"
          label="Enter the Code"
          rules={[{ required: true, message: "Code is required" }]}
        >
          <Input placeholder="Enter sended code" />
        </Form.Item>

        <Form.Item className="login-form-button">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Check code
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegisterStep2;
