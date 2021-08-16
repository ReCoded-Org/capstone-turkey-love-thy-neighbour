import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./index.scss";
import mainImg from "../../images/firstContactUs.svg";
import logoimg from "../../images/secondContactUs.svg";

function ContactUs() {
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
            <h1>Implement Formik React</h1>
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
