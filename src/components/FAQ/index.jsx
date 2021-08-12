import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img from "../../images/UndrawQuestion.png";
import "./index.scss";

function FAQ() {
  return (
    <section className="primary-hero-section container-fluid">
      <Container className="faq-content-container d-flex align-items-center">
        <Row className="faq-content-row m-0">
          <Col
            xs={12}
            sm={12}
            md={6}
            className="first-column d-flex flex-column justify-content-center align-items-start"
          >
            <h2>FAQs</h2>
            <h5>Are meetings safe?</h5>
            <p>
              For this important topic, we have collaborated with popular cafes
              and places all around of Istanbul so that our neighbours would be
              able to meet with each other without worries.
            </p>
            <h5>What is the point?</h5>
            <p>
              More than 264 million people suffer from depression worldwide and
              with quarantine, it was not getting any better. That’s why it’s so
              important for us to solve the problem of people feeling more and
              more isolated as time progresses. We care about you, and would
              like you to care about your neighbour so that, we could be a
              stronger community.
            </p>
            <h5>How all of this work?</h5>
            <p>
              With the data that you provide in your profile, we are carefully
              filtering neighbours that you may want to meet and network with.
            </p>
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

export default FAQ;
