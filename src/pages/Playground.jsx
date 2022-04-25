import React, { useState } from "react";
import Login from "../components/Shared/Login";
import { Button } from "antd";

function Playground() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Button type="primary" onClick={() => setModal(true)}>
        Vertically centered modal dialog
      </Button>
      <Login modal={modal} setModal={setModal} />
    </div>
  );
}

export default Playground;
