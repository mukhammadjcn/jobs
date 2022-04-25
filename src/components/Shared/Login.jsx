import React, { useState } from "react";
import { Modal, Form, Input, Button, PageHeader } from "antd";
import Done from "./Done";
import "../../styles/shared/Login.scss";

function Login({ modal, setModal }) {
  // Step 1
  const sendSmS = (number) => {
    setNumber(number.phone_number);
    console.log("number :>> ", number);
    setStep(2);
  };

  // Step 2
  const checkCode = (code) => {
    const data = {
      phone_number: number,
      ...code,
    };
    console.log("code :>> ", data);
    setStep(3);
  };

  // Step 3
  const onFinish = (values) => {
    const { name, password, phone_number } = values;
    console.log("Received values of form: ", {
      name,
      password,
      phone_number,
    });
    setStep(4);
    setTimeout(() => {
      setModal(false);
    }, 3000);
  };

  const [number, setNumber] = useState("998916763787"); //   Phone number
  const [step, setStep] = useState(1); // Step state

  return (
    <>
      <Modal
        className="login"
        title="Register your account"
        centered
        visible={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
        footer={null}
      >
        {step == 1 ? (
          // Step 1
          <div className="login__step1">
            <Form name="normal_login" onFinish={sendSmS}>
              {/* Phone number */}
              <Form.Item
                name="phone_number"
                label="Phone"
                initialValue={number}
                rules={[{ required: true, message: "Phone number required" }]}
              >
                <Input placeholder="Username" />
              </Form.Item>

              <Form.Item className="login-form-button">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Send code
                </Button>
              </Form.Item>
            </Form>
          </div>
        ) : step == 2 ? (
          // Step 1
          <div className="login__step2">
            <PageHeader onBack={() => setStep(1)} title={`Step ${step}`} />
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
                >
                  Send code
                </Button>
              </Form.Item>
            </Form>
          </div>
        ) : step == 3 ? (
          // Step 3
          <div className="login__step3">
            <PageHeader onBack={() => setStep(2)} title={`Step ${step}`} />
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
                >
                  Register now
                </Button>
              </Form.Item>
            </Form>
          </div>
        ) : step == 4 ? (
          <Done />
        ) : (
          ""
        )}
      </Modal>
    </>
  );
}
export default Login;
