import React, { useState } from "react";
import { client } from "../../../services/axios";
import { Form, Input, Button, message } from "antd";

function RegisterStep1({ number, setNumber, setStep }) {
  //loading state when button is clicked
  const [loading, setLoading] = useState(false);

  // Step 1
  const sendSmS = async (number) => {
    setLoading(true);
    try {
      const { data } = await client.post(`/users/users/send_code/`, number);
      setNumber(number.phone_number);
      message.success(data.message);
      setStep(2);
    } catch {
      message.error("Something went wrong, try again !");
    }
    setLoading(false);
  };

  return (
    // Step 1
    <div className="login__step1">
      <Form onFinish={sendSmS}>
        {/* Phone number */}
        <Form.Item
          name="phone_number"
          label="Phone"
          initialValue={number}
          rules={[{ required: true, message: "Phone number required" }]}
        >
          <Input placeholder="Phone number" />
        </Form.Item>

        <Form.Item className="login-form-button">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Send code
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegisterStep1;
