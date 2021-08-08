import React from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { useFormik } from "formik";

import "./index.scss";
import Logo from "../../images/Logo.svg";

const SignInModal = ({
  handleClickSignIn,
  showSignInModal,
  handleClickSignUp,
}) => {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onClick = (e) => {
    e.preventDefault();
    handleClickSignUp();
    handleClickSignIn();
  };

  const toggle = () => {
    handleClickSignIn();
  };

  return (
    <Modal show={showSignInModal} onHide={handleClickSignIn}>
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-between align-items-center align-content-between">
          <img src={Logo} alt="logo" />
          <span>Sign In</span>
        </Modal.Title>
        <Button
          type="button"
          data-toggle="modal"
          className="btn-close"
          aria-label="Close"
          onClick={toggle}
        />
      </Modal.Header>

      <form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Card.Text className="d-flex flex-column">
                <input
                  className="sign-in-email p-2"
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
                  className="sign-in-password p-2"
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
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer className="sign-in-buttons d-flex flex-column align-items-stretch">
          <Button type="submit" className="sign-in-button p-2 ">
            Sign In
          </Button>
          <Button type="submit" className="sign-in-google-button p-2 ">
            Sign In With Google
          </Button>
          <Button type="submit" className="sign-in-facebook-button p-2 ">
            Sign In With Facebook
          </Button>
        </Modal.Footer>
        <Modal.Footer className="d-flex flex-column align-items-center">
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
