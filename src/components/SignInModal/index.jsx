import React, { useState } from "react";

import { Modal, Button, Card, Alert } from "react-bootstrap";

import { useFormik } from "formik";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { auth, googleProvider, facebookProvider } from "../../firebaseConfig";

import { setUserDocument } from "../../utils/helpers";

import { ReactComponent as Logo } from "../../images/logoGrayBg.svg";
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
          .then(() => {
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

  function handleGoogleSignIn() {
    auth.signInWithPopup(googleProvider).then((credObj) => {
      const { isNewUser } = credObj.additionalUserInfo;

      if (isNewUser) {
        const firestoreDocUid = credObj.user.uid;
        const userData = credObj.additionalUserInfo.profile;
        const {
          // eslint-disable-next-line camelcase
          given_name,
          // eslint-disable-next-line camelcase
          family_name,
          email,
          picture,
          gender = "Prefer not to say",
          district = "",
          invitationNotifications = [],
        } = userData;

        const firestoreDoc = {
          firstName: given_name,
          lastName: family_name,
          email,
          profileImageUrl: picture,
          gender,
          district,
          invitationNotifications,
        };
        setUserDocument(firestoreDocUid, firestoreDoc)
          .then(() => dispatch({ type: "signIn" }))
          .then(() => history.push(`/profile/${firestoreDocUid}`))
          .then(() => dispatch({ type: "editProfile" }));
        return;
      }

      dispatch({ type: "signIn" });
      history.push("/meet");
    });
  }

  function handleFacebookSignIn() {
    auth.signInWithPopup(facebookProvider).then((credObj) => {
      const { isNewUser } = credObj.additionalUserInfo;

      if (isNewUser) {
        const firestoreDocUid = credObj.user.uid;
        const userData = credObj.additionalUserInfo.profile;
        const {
          // eslint-disable-next-line camelcase
          first_name,
          // eslint-disable-next-line camelcase
          last_name,
          email,
          picture,
          gender = "Prefer not to say",
          district = "",
          invitationNotifications = [],
        } = userData;

        const firestoreDoc = {
          firstName: first_name,
          lastName: last_name,
          email,
          profileImageUrl: picture.data.url,
          gender,
          district,
          invitationNotifications,
        };
        setUserDocument(firestoreDocUid, firestoreDoc)
          .then(() => dispatch({ type: "signIn" }))
          .then(() => history.push(`/profile/${firestoreDocUid}`))
          .then(() => dispatch({ type: "editProfile" }));
        return;
      }

      dispatch({ type: "signIn" });
      history.push("/meet");
    });
  }

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
        <SignInUpGoogleButton type="submit" onClick={handleGoogleSignIn}>
          Sign In With Google
        </SignInUpGoogleButton>
        <SignInUpFacebookButton type="submit" onClick={handleFacebookSignIn}>
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
