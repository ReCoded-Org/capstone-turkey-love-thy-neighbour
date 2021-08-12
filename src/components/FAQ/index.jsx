import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img from "../../images/UndrawQuestion.png";
import "./index.scss";

function FAQ() {
  return (
    <section className="container-fluid">
      <Container className="faq-content-container d-flex align-items-center">
        <Row className="faq-row m-0">
          <Col
            xs={12}
            sm={12}
            md={6}
            className="first-column p-3 pb-xs-5 pl-xs-30 pb-md-5 d-flex flex-column justify-content-center align-items-start"
          >
            <h2>FAQs</h2>
            <h3>Are meetings safe?</h3>
            <p>
              For this important topic, we have collaborated with popular cafes
              and places all around of Istanbul so that our neighbours would be
              able to meet with each other without worries.
            </p>
            <h3>What is the point?</h3>
            <p>
              More than 264 million people suffer from depression worldwide and
              with quarantine, it was not getting any better. That’s why it’s so
              important for us to solve the problem of people feeling more and
              more isolated as time progresses. We care about you, and would
              like you to care about your neighbour so that, we could be a
              stronger community.
            </p>
            <h3>How all of this work?</h3>
            <p>
              With the data that you provide in your profile, we are carefully
              filtering neighbours that you may want to meet and network with.
            </p>
          </Col>

          <Col xs={12} sm={12} md={6} className="p-3 px-xs-1 px-md-1 h-100">
            <img src={img} alt="img" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FAQ;
