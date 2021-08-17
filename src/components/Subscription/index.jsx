import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import img from "../../images/PhoneandNotifications.svg";

import "./index.scss";

function Subscription() {
  return (
    <section className="subscription-img-bg primary-hero-section container-fluid">
      <Container className="subscription-content-container d-flex align-items-center">
        <Row className="subscription-content-row m-0">
          <Col
            xs={12}
            sm={12}
            md={6}
            className="first-column d-flex flex-column justify-content-center align-items-start"
          >
            <h1>
              Subscribe to our <br /> newsletter.
            </h1>
            <h3>Never miss an update !</h3>
            <p>Signup to our newsletter to get a weekly digest.</p>
            <div className="button">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="E-Mail"
              />
              <button type="submit" className="btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
                </svg>
              </button>
            </div>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            className="my-md-auto d-flex d-sm-flex d-md-block justify-content-center justify-content-sm-center justify-content-md-center"
          >
            <img src={img} alt="img" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Subscription;
