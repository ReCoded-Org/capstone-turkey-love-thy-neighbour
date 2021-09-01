import React, { useState } from "react";

import { Modal, Button, Card, Alert } from "react-bootstrap";

import { useFormik } from "formik";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { auth } from "../../firebaseConfig";

import { ReactComponent as Logo } from "../../images/logo.svg";
import {
  SignInUpButton,
  SignInUpGoogleButton,
  SignInUpFacebookButton,
} from "../CustomButtons";
import "./index.scss";

// refactor styling

const SignInModal = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const initialSignInState = { isOpen: false, message: "" };
  const [signInAlertState, setSignInAlertState] = useState(initialSignInState);

  const isSignInOpen = useSelector((state) => state.popup.isSignInOpen);
  const isSignedIn = useSelector((state) => state.user.isSignedIn);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email";
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
    onSubmit: (values, { setSubmitting, resetForm }) => {
      resetForm();
      setSignInAlertState(initialSignInState);
      if (!isSignedIn) {
        auth
          .signInWithEmailAndPassword(values.email, values.password)
          .then((authCred) => {
            console.log("authCred", authCred);
            history.push(`/meet`);
            dispatch({ type: "signIn" });
          })
          .catch((err) =>
            setSignInAlertState({ isOpen: true, message: err.message })
          );
        setSubmitting(false);
      }
    },
  });

  return (
    <Modal
      show={isSignInOpen}
      onHide={() => dispatch({ type: "signIn" })}
      id="sign-in-modal"
    >
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

      <Modal.Body>
        <Card>
          <Card.Body className="d-flex flex-column">
            <form onSubmit={formik.handleSubmit} id="sign-in-form">
              <input
                className="p-2"
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
                className="p-2"
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
            </form>
          </Card.Body>
        </Card>
      </Modal.Body>

      <Modal.Footer className="first-sign-in-modal-footer d-flex flex-column align-items-stretch">
        <SignInUpButton type="submit" form="sign-in-form">
          Sign In
        </SignInUpButton>
        <SignInUpGoogleButton type="submit">
          Sign In With Google
        </SignInUpGoogleButton>
        <SignInUpFacebookButton type="submit">
          Sign In With Facebook
        </SignInUpFacebookButton>
      </Modal.Footer>
      <Modal.Footer className="second-sign-in-modal-footer d-flex flex-column align-items-center">
        <span>
          Don&lsquo;t have an{" "}
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              dispatch({ type: "signIn" });
              dispatch({ type: "signUp" });
            }}
          >
            Account
          </a>
          ?
        </span>
      </Modal.Footer>
      <Alert
        variant="danger"
        show={signInAlertState.isOpen}
        onClick={() => setSignInAlertState(initialSignInState)}
        dismissible
      >
        {signInAlertState.message}
      </Alert>
    </Modal>
  );
};

export default SignInModal;
