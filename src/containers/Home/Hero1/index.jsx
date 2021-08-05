import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";

import "./index.scss";

function Hero1() {
  const CATButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    padding: 13px 65px;
    margin-top: 13px;
  `;

  return (
    <section className="hero1-img-bg container-fluid">
      <Container className="hero1-content-container">
        <Row className="hero1-content-container">
          <Col className="pe-0 d-flex flex-column justify-content-center align-items-start">
            <h1 className="fs-1">Love Thy Neighbor!</h1>
            <p>
              Let’s build a strong, dynamic and caring community that uplifts
              each other.
            </p>
            <CATButton className="cta-button">Join Us!</CATButton>
          </Col>
          <Col className="ps-0 right-column">a</Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero1;
