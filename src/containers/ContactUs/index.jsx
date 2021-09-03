import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import * as Yup from "yup";
import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { firestore } from "../../firebaseConfig";

import EmailSentModal from "../../components/EmailSentModal";
import { ContactUsSendButton } from "../../components/CustomButtons/index";
import { ReactComponent as LTNText } from "../../images/LTNText.svg";
import { ReactComponent as Logo } from "../../images/logoGrayBg.svg";
import "./index.scss";

function ContactUs() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      user_message: "",
    },
    validationSchema: Yup.object().shape({
      first_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required"),
      last_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      user_message: Yup.string()
        .min(2, "Mininum 10 characters")
        .max(15, "Maximum 500 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      firestore
        .collection("contacts")
        .add({
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          user_message: values.user_message,
        })
        .then(() => dispatch({ type: "emailSent" }));
    },
  });

  return (
    <section className="contact-us-section container-fluid">
      <Container className="contactus-content-container h-100 d-flex align-items-center">
        <Row className="contactus-content-row w-100">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="d-flex flex-column justify-content-center align-items-center order-last order-sm-last order-md-last order-lg-first"
          >
            <h1>Contact Us</h1>
            <p>
              Help us create effective and active communities by communicating
              with us!
            </p>
            <form className="d-flex flex-column" onSubmit={formik.handleSubmit}>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.first_name && formik.touched.first_name && (
                    <div className="error-msg">{formik.errors.first_name}</div>
                  )}
                </div>

                <div className="d-flex flex-column">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.last_name && formik.touched.last_name && (
                    <div className="error-msg">{formik.errors.last_name}</div>
                  )}
                </div>
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="error-msg">{formik.errors.email}</div>
              )}
              <textarea
                name="user_message"
                placeholder="Message"
                value={formik.values.user_message}
                onChange={formik.handleChange}
              />
              {formik.errors.user_message && formik.touched.user_message && (
                <div className="error-msg">{formik.errors.user_message}</div>
              )}

              <ContactUsSendButton>Send</ContactUsSendButton>
            </form>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <LTNText />
            <Logo />
          </Col>
        </Row>
        <EmailSentModal />
      </Container>
    </section>
  );
}
export default ContactUs;
