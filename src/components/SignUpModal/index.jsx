import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useFormik } from "formik";

const SignUpModal = ({
  handleClickSignIn,
  showSignUpModal,
  handleClickSignUp,
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatedPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onClick = (e) => {
    e.preventDefault();
    handleClickSignIn();
    handleClickSignUp();
  };

  return (
    <Modal show={showSignUpModal} onHide={handleClickSignUp}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>

      <form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <input
            id="firstName"
            name="firstName"
            type="firstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <input
            id="lastName"
            name="lastName"
            type="lastName"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
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
          <input
            id="repeatedPassword"
            name="repeatedPassword"
            type="repeatedPassword"
            placeholder="Repeat Password"
            onChange={formik.handleChange}
            value={formik.values.repeatedPassword}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button>Sign Up</Button>
          <Button>Sign Up With Google</Button>
          <Button>Sign Up With Facebook</Button>
          <span>
            Already got an{" "}
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

export default SignUpModal;
