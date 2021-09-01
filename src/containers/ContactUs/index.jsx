import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./index.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { CTAButton } from "../../components/CustomButtons/index";
import { ReactComponent as MainImg } from "../../images/firstContactUs.svg";
import { ReactComponent as LogoImg } from "../../images/secondContactUs.svg";
import { ReactComponent as CheckIcon } from "../../images/checkicon.svg";
import { firestore } from "../../firebaseConfig";

function ContactUs() {
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
        .required("Required!"),
      last_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      user_message: Yup.string()
        .min(2, "Mininum 10 characters")
        .max(15, "Maximum 500 characters")
        .required("Required!"),
    }),
    onSubmit: (values, event) => {
      firestore.collection("contacts").add({
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        user_message: values.user_message,
      });
    },
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="container-fluid">
      <Container className="contactus-content-container d-flex align-items-center">
        <Row className="contactus-content-row m-0">
          <Col
            xs={12}
            sm={12}
            md={6}
            className="first-column p-0 pb-xs-5 pb-md-5 d-flex flex-column justify-content-center align-items-start"
          >
            <div className="App">
              <h1 className="main-header">Contact Us</h1>
              <h5>
                Help us create effective and active communities by communicating
                with us!
              </h5>
              <form onSubmit={formik.handleSubmit}>
                <div className="form-box">
                  <div className="first-last-names">
                    <div>
                      <input
                        className="first-name"
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.first_name &&
                        formik.touched.first_name && (
                          <p className="validation">
                            {formik.errors.first_name}
                          </p>
                        )}
                    </div>
                    <div>
                      <input
                        className="last-name"
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.last_name && formik.touched.last_name && (
                        <p className="validation">{formik.errors.last_name}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <input
                      className="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                      <p className="validation">{formik.errors.email}</p>
                    )}
                  </div>
                  <div>
                    <input
                      className="textarea"
                      type="text"
                      name="user_message"
                      placeholder="Message"
                      value={formik.values.user_message}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.user_message &&
                      formik.touched.user_message && (
                        <p className="validation">
                          {formik.errors.user_message}
                        </p>
                      )}
                  </div>
                </div>
                <div className="send-button">
                  <CTAButton onClick={handleShow}>
                    <Link to="/neighbors">Send</Link>
                  </CTAButton>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                      <h5>
                        The message was successfully sent! <CheckIcon />
                        <br />
                        We will get you back soon!
                      </h5>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </form>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="p-0 px-xs-1 px-md-1 h-100">
            <MainImg className="img-fluid main-img" />
            <LogoImg alt="img" className="img-fluid logo-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default ContactUs;
