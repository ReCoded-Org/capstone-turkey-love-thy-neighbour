import React from "react";

import { Modal, Button, Card } from "react-bootstrap";

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

const SignInModal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isSignInOpen = useSelector((state) => state.popup.isSignInOpen);
  const isSignedIn = useSelector((state) => state.user.isSignedIn);

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
    onSubmit: (values, { setSubmitting, resetForm }) => {
      resetForm();
      if (!isSignedIn) {
        auth
          .signInWithEmailAndPassword(values.email, values.password)
          .then((cred) => {
            history.push(`/profile/${cred.user.uid}`);
            dispatch({ type: "signIn" });
          })
          .catch((error) =>
            console.error("A problem occurred while logging in.", error)
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
          <Card.Body>
            <form
              onSubmit={formik.handleSubmit}
              className="d-flex flex-column"
              id="sign-in-form"
            >
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

      <div className="two-footer-wrapper">
        <Modal.Footer className="d-flex flex-column align-items-stretch">
          <SignInUpButton
            type="submit"
            disabled={formik.isSubmitting}
            form="sign-in-form"
          >
            Sign In
          </SignInUpButton>
          <SignInUpGoogleButton>Sign In With Google</SignInUpGoogleButton>
          <SignInUpFacebookButton>Sign In With Facebook</SignInUpFacebookButton>
        </Modal.Footer>
        <Modal.Footer className="d-flex flex-column align-items-center">
          <span>
            Don&lsquo;t you have an{" "}
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                dispatch({ type: "signIn" });
                dispatch({ type: "signUp" });
              }}
            >
              account
            </a>
            ?
          </span>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default SignInModal;
