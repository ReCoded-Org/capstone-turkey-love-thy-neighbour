import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useFormik } from "formik";

const SignInModal = ({
  handleClickSignIn,
  showSignInModal,
  handleClickSignUp,
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onClick = (e) => {
    e.preventDefault();
    handleClickSignUp();
    handleClickSignIn();
  };

  return (
    <Modal show={showSignInModal} onHide={handleClickSignIn}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>

      <form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button>Sign In</Button>
          <Button>Sign In With Google</Button>
          <Button>Sign In With Facebook</Button>
          <span>
            Dont have an{" "}
            <a href="/" onClick={onClick}>
              Account
            </a>
            ?
          </span>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default SignInModal;
