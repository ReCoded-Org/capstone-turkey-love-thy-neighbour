import React from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { useFormik } from "formik";

import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as Logo } from "../../images/logo.svg";
import {
  SignInUpButton,
  SignInUpGoogleButton,
  SignInUpFacebookButton,
} from "../CustomButtons";
import "./index.scss";

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

  // const onClick = (e) => {
  //   e.preventDefault();
  //   handleClickSignUp();
  //   handleClickSignIn();
  // };

  // const toggle = () => {
  //   handleClickSignIn();
  // };

  const dispatch = useDispatch();
  const isSignInOpen = useSelector((state) => state.popup.isSignInOpen);

  return (
    <Modal show={isSignInOpen} onHide={() => dispatch({ type: "signIn" })}>
      <Modal.Header className="d-flex justify-content-between">
        <Logo />
        <h2 className="mx-auto">Sign In</h2>
        <Button
          type="button"
          data-toggle="modal"
          className="btn-close"
          aria-label="Close"
          onClick={() => dispatch({ type: "signIn" })}
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
          <SignInUpButton type="submit">Sign In</SignInUpButton>
          <SignInUpGoogleButton type="submit">
            Sign In With Google
          </SignInUpGoogleButton>
          <SignInUpFacebookButton type="submit">
            Sign In With Facebook
          </SignInUpFacebookButton>
        </Modal.Footer>
        <Modal.Footer className="d-flex flex-column align-items-center">
          <span>
            Dont have an{" "}
            <a
              href="/"
              onClick={() => {
                dispatch({ type: "signIn" });
                dispatch({ type: "signUp" });
              }}
            >
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
