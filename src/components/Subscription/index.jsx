import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { ReactComponent as PhoneAndNotificationsImg } from "../../images/PhoneandNotifications.svg";
import { ReactComponent as CheckIcon } from "../../images/Check.svg";

import "./index.scss";

function Subscription() {
  const [email, setEmail] = React.useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <section className="subscription-img-bg container-fluid">
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
            <h3>Never miss an update!</h3>
            <p>Signup to our newsletter to get a weekly digest.</p>
            <div className="button-input-wrapper">
              <input
                type="email"
                className="form-email"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!email}
              >
                <CheckIcon className="check-icon" />
              </button>
            </div>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            className="my-md-auto d-flex d-sm-flex d-md-block justify-content-center justify-content-sm-center justify-content-md-center"
          >
            <PhoneAndNotificationsImg />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Subscription;
