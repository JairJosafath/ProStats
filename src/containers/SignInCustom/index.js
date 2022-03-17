import { Modal } from "rsuite";
import { ButtonToolbar, Button } from "rsuite";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

import { useState } from "react";
import SignInComp from "../../components/SignInComp";
import { useNavigate } from "react-router-dom";

const Box = () => {
  const { user } = useAuthenticator();
  let navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    if (user) navigate("../");
    else navigate("dashboard");
    setOpen(false);
  };

  // console.log("boxxx", user);
  return (
    <div className="modal-container">
      <Modal open={open} onClose={handleClose}>
        <Authenticator />
      </Modal>
    </div>
  );
};

{
  /* 
  <Modal.Header>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>WHATS GOOODDD</p>
        </Modal.Body>
  <Modal.Footer>
<Button onClick={handleClose} appearance="primary">
  Ok
</Button>
<Button onClick={handleClose} appearance="subtle">
  Cancel
</Button>
</Modal.Footer> */
}

const SignInCustom = () => {
  return (
    // <div
    //   style={{
    //     height: "100vh",
    //     width: "100vw",
    //     background: "black",
    //     opacity: 0.5,
    //     top: 0,
    //     left: 0,
    //     position: "absolute",
    //     zIndex: 100,
    //   }}
    // >
    //   <p>Sign In</p>
    <Box />
    // </div>
  );
};

export default SignInCustom;
