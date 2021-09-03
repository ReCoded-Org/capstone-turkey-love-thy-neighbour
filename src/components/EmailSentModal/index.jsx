import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Modal, Button } from "react-bootstrap";
import { ReactComponent as CheckIcon } from "../../images/checkicon.svg";

function EmailSentModal() {
  const dispatch = useDispatch();
  const isEmailSentOpen = useSelector((state) => state.popup.isEmailSentOpen);

  return (
    <Modal
      show={isEmailSentOpen}
      onHide={() => dispatch({ type: "emailSent" })}
    >
      <Modal.Body>
        <h5>
          The message was successfully sent! <CheckIcon />
          <br />
          We will get you back soon!
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => dispatch({ type: "emailSent" })}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EmailSentModal;
