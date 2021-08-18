/* eslint-disable prettier/prettier */
import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { CTAButton } from "../../components/CustomButtons/index";
import MeetImg from "../../images/meet.jpg";
import "./index.scss";

// TODO: redirect users after sign in into here
// TODO: use https://lipis.github.io/bootstrap-sweetalert/ the second from the bottom for the how was your meeting alert

function Meet() {
  const firstName = useSelector((state) => state.user.firestoreDoc?.firstName);

  return (
    <Container fluid className="meet-container-fluid d-flex align-items-center">
      <Container className="meet-content-container d-flex align-items-start align-items-sm-start align-items-md-center">
        <Row className="meet-row">
          <Col
            xs={{ span: 12, order: "last" }}
            sm={{ span: 12, order: "last" }}
            md={{ span: 6, order: "first" }}
            className="d-flex flex-column justify-content-center align-items-center align-items-sm-center align-items-md-start text-center text-sm-center text-md-start"
          >
            <h3>Hello, {firstName}</h3>
            <h1>Meet nearby people with our cutting edge algorithms.</h1>
            <p>
              After you have been matched with people near you, you can send
              them a message and meet up quickly !
            </p>
            <CTAButton>
              <Link to="/neighbors">Meet Now</Link>
            </CTAButton>
          </Col>
          <Col
            xs={{ span: 12, order: "first" }}
            sm={{ span: 12, order: "first" }}
            md={{ span: 6, order: "last" }}
            className="d-flex justify-content-end"
          >
            <img src={MeetImg} className="img-fluid" alt="meet img" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Meet;
