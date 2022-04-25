import React, { useState } from "react";
import Done from "./Done";
import { Modal, Tabs, Steps } from "antd";
import LoginStep1 from "./RegisterSteps/RegisterStep1";
import LoginStep2 from "./RegisterSteps/RegisterStep2";
import LoginStep3 from "./RegisterSteps/RegisterStep3";
import "../../styles/shared/Login.scss";
import LoginForm from "./LoginForm";

function Login({ modal, setModal }) {
  const [number, setNumber] = useState(""); //   Phone number
  const [step, setStep] = useState(1); // Step state
  const [isLogin, setLogin] = useState(false); // Set Login
  const { TabPane } = Tabs; //Tabs for Login and Sign in
  const { Step } = Steps; // One step from Steps

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
        <Tabs defaultActiveKey="1" centered className="login__tab">
          {/* Tab for Login */}
          <TabPane tab="Login" key="1">
            {!isLogin ? (
              <LoginForm setLogin={setLogin} setModal={setModal} />
            ) : (
              <Done />
            )}
          </TabPane>

          {/* Tab for Login */}
          <TabPane tab="Register" key="2">
            <Steps current={step - 1}>
              <Step title="Step 1" onClick={() => setStep(1)} />
              <Step title="Step 2" onClick={() => setStep(2)} />
              <Step title="Step 3" />
            </Steps>
            {step == 1 ? (
              // Step 1
              <LoginStep1
                number={number}
                setNumber={setNumber}
                setStep={setStep}
              />
            ) : step == 2 ? (
              // Step 2
              <LoginStep2 number={number} setStep={setStep} />
            ) : step == 3 ? (
              // Step 3
              <LoginStep3
                number={number}
                setStep={setStep}
                setModal={setModal}
              />
            ) : step == 4 ? (
              <Done />
            ) : (
              ""
            )}
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
}
export default Login;
