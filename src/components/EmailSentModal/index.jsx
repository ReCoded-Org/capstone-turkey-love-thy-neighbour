import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Modal, CloseButton } from "react-bootstrap";
import { ReactComponent as CheckIcon } from "../../images/checkicon.svg";

import "./index.scss";

function EmailSentModal() {
  const dispatch = useDispatch();
  const isEmailSentOpen = useSelector((state) => state.popup.isEmailSentOpen);

  return (
    <Modal
      show={isEmailSentOpen}
      onHide={() => dispatch({ type: "emailSent" })}
      className="email-sent-modal"
    >
      <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
        <CheckIcon />
        <h3 className="mt-3 text-center">
          Your message has been successfully sent!
        </h3>
        <br />
        <p>We will get back to you soon.</p>
        <CloseButton onClick={() => dispatch({ type: "emailSent" })} />
      </Modal.Body>
    </Modal>
  );
}

export default EmailSentModal;
