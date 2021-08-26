import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./index.scss";
import { useFormik } from "formik";

import * as Yup from "yup";
import { Link } from "react-router-dom";
import { CTAButton } from "../../components/CustomButtons/index";

import mainImg from "../../images/firstContactUs.svg";
import logoimg from "../../images/secondContactUs.svg";

function ContactUs() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      user_message: "",
    },
    validationSchema: Yup.object({
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
    onSubmit: (values) => {
      // eslint-disable-next-line
      alert(JSON.stringify(values, null, 2));
    },
  });

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
                          <p>{formik.errors.first_name}</p>
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
                        <p>{formik.errors.last_name}</p>
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
                      <p>{formik.errors.email}</p>
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
                        <p>{formik.errors.user_message}</p>
                      )}
                  </div>
                </div>
                <div className="send-button">
                  <CTAButton>
                    <Link to="/neighbors">Send</Link>
                  </CTAButton>
                </div>
              </form>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="p-0 px-xs-1 px-md-1 h-100">
            <img src={mainImg} alt="img" className="img-fluid" />
            <img src={logoimg} alt="img" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactUs;
