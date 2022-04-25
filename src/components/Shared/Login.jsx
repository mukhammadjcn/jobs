import React, { useState } from "react";
import { Modal, Button } from "antd";
import "../../styles/shared/Login.scss";

function Login() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setModal(true)}>
        Vertically centered modal dialog
      </Button>
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
}
export default Login;
