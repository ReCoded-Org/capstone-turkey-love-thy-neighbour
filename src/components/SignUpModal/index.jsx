import React from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { useFormik } from "formik";

import "./index.scss";
import Logo from "../../images/Logo.svg";

const SignUpModal = ({
  handleClickSignIn,
  showSignUpModal,
  handleClickSignUp,
}) => {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.repeatedPassword) {
      errors.repeatedPassword = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatedPassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onClick = (e) => {
    e.preventDefault();
    handleClickSignIn();
    handleClickSignUp();
  };

  const toggle = () => {
    handleClickSignUp();
  };
  // <Modal.Title className="d-flex justify-content-between align-items-center align-content-between">

  return (
    <Modal show={showSignUpModal} onHide={handleClickSignUp}>
      <Modal.Header>
        <img src={Logo} alt="logo" />
        <h4>Sign Up</h4>
        <Button
          type="button"
          data-toggle="modal"
          className="btn-close"
          aria-label="Close"
          onClick={toggle}
        />
        {/* 18 px offset from right and left for the text just make margin: 0 auto */}
      </Modal.Header>

      <form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Card.Text className="sign-up-buttons d-flex flex-column ">
                <input
                  className="sign-up-form-item p-2 "
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="error-msg">{formik.errors.firstName}</div>
                ) : null}
                <input
                  className="sign-up-form-item p-2 "
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="error-msg">{formik.errors.lastName}</div>
                ) : null}
                <input
                  className="sign-up-form-item p-2 "
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error-msg">{formik.errors.email}</div>
                ) : null}
                <input
                  className="sign-up-form-item p-2 "
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error-msg">{formik.errors.password}</div>
                ) : null}
                <input
                  className="sign-up-form-item p-2 "
                  id="repeatedPassword"
                  name="repeatedPassword"
                  type="password"
                  placeholder="Repeat Password"
                  onChange={formik.handleChange}
                  value={formik.values.repeatedPassword}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error-msg">{formik.errors.password}</div>
                ) : null}
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer className="sign-up-buttons d-flex flex-column align-items-stretch">
          <Button type="submit" className="sign-up-button p-2 ">
            Sign Up
          </Button>
          <Button type="submit" className="sign-up-google-button p-2 ">
            Sign Up With Google
          </Button>
          <Button type="submit" className="sign-up-facebook-button p-2 ">
            Sign Up With Facebook
          </Button>
        </Modal.Footer>
        <Modal.Footer className="d-flex flex-column align-items-center">
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
