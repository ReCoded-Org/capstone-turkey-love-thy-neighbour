import React from "react";

import { Modal, Button, Card } from "react-bootstrap";

import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

import { removeOneProp, setUserDocument } from "../../hooks/index";

import { auth } from "../../firebaseConfig";

import "./index.scss";
import logo from "../../images/logo.svg";
import {
  SignInUpButton,
  SignInUpGoogleButton,
  SignInUpFacebookButton,
} from "../CustomButtons";

const SignUpModal = () => {
  const dispatch = useDispatch();
  const isSignUpOpen = useSelector((state) => state.popup.isSignUpOpen);
  const history = useHistory();

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
    onSubmit: (values, { resetForm, setSubmitting }) => {
      resetForm();
      const objWithoutPasswordConfigProp = removeOneProp(
        values,
        "repeatedPassword"
      );
      auth
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((userCred) => {
          setUserDocument(userCred.user.uid, objWithoutPasswordConfigProp);
          return userCred;
        }) // set the document in firestore
        .then((userCred) => {
          dispatch({ type: "signUp" });
          history.push(`/profile/${userCred.user.uid}`);
          dispatch({ type: "editProfile" });
        }) // take the user to their profile
        .catch((error) =>
          console.error(
            "A problem occured while your account being created!",
            error
          )
        );
      setSubmitting(false);
    },
  });

  return (
    <Modal
      show={isSignUpOpen}
      onHide={() => {
        dispatch({ type: "signUp" });
      }}
      id="sign-up-modal"
    >
      <Modal.Header>
        <img src={logo} alt="logo" />
        <h2>Sign Up</h2>
        <Button
          type="button"
          data-toggle="modal"
          className="btn-close"
          aria-label="Close"
          onClick={() => {
            dispatch({ type: "signUp" });
          }}
        />
      </Modal.Header>

      <Modal.Body>
        <Card>
          <Card.Body>
            <form
              onSubmit={formik.handleSubmit}
              className="d-flex flex-column"
              id="sign-up-form"
            >
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
            </form>
          </Card.Body>
        </Card>
      </Modal.Body>

      <div className="two-footer-wrapper">
        <Modal.Footer className="sign-up-buttons d-flex flex-column align-items-stretch">
          <SignInUpButton
            type="submit"
            disabled={formik.isSubmitting}
            form="sign-up-form"
          >
            Sign Up
          </SignInUpButton>
          <SignInUpGoogleButton type="submit" disabled={formik.isSubmitting}>
            Sign Up With Google
          </SignInUpGoogleButton>
          <SignInUpFacebookButton type="submit" disabled={formik.isSubmitting}>
            Sign Up With Facebook
          </SignInUpFacebookButton>
        </Modal.Footer>
        <Modal.Footer className="d-flex flex-column align-items-center">
          <span>
            Already Got an{" "}
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                dispatch({ type: "signUp" });
                dispatch({ type: "signIn" });
              }}
            >
              Account
            </a>
            ?
          </span>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default SignUpModal;
