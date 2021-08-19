import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./index.scss";
import { useFormik } from "formik";

import * as Yup from "yup";
import mainImg from "../../images/firstContactUs.svg";
import logoimg from "../../images/secondContactUs.svg";

function ContactUs() {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
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
              <h1>Validation with Formik + Yup</h1>

              <form onSubmit={formik.handleSubmit}>
                <div>
                  <h4>Full Name</h4>
                  <input
                    type="text"
                    name="full_name"
                    value={formik.values.full_name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.full_name && formik.touched.full_name && (
                    <p>{formik.errors.full_name}</p>
                  )}
                </div>
                <div>
                  <h4>Email</h4>
                  <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p>{formik.errors.email}</p>
                  )}
                </div>
                <div>
                  <h4>Password</h4>
                  <input
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <p>{formik.errors.password}</p>
                  )}
                </div>
                <div>
                  <h4>Confirm Password</h4>
                  <input
                    type="password"
                    name="confirm_password"
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.confirm_password &&
                    formik.touched.confirm_password && (
                      <p>{formik.errors.confirm_password}</p>
                    )}
                </div>
                <div>
                  <button type="submit">Submit</button>
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
