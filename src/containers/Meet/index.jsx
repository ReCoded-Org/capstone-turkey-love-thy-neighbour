/* eslint-disable prettier/prettier */
import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { CTAButton } from "../../components/CustomButtons/index";
import MeetImg from "../../images/meet.png";
import "./index.scss";
// use https://lipis.github.io/bootstrap-sweetalert/ the second from the bottom for the how was your meeting alert

function Meet() {
  return (
    <Container fluid className="meet-container-fluid">
      <Container className="meet-container d-flex align-items-center">
        <Row className="meet-row">
          <Col>
            <h3>Hello, Ali</h3>
            <h1>Meet nearby people with our cutting edge algorithms.</h1>
            <p>
              After you have been matched with people near you, you can send
              them a message and meet up quickly !
            </p>
            <CTAButton>Meet Now</CTAButton>
          </Col>
          <Col>
            <img src={MeetImg} className="img-fluid" alt="meet img" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Meet;
