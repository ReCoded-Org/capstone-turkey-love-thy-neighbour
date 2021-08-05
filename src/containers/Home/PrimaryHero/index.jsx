import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";

import "./index.scss";
import img from "../../../utils/PrimaryHeroContentBgImg.png";
// sm and xs screen sizes wil be displayed in a one column layout

function PrimaryHero() {
  const CATButton = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 13px 65px;
    margin-top: 13px;
  `;

  return (
    <section className="primary-hero-img-bg container-fluid">
      <Container className="primary-hero-content-container d-flex align-items-center">
        <Row className="primary-hero-content-row">
          <Col className="pe-0 d-flex flex-column justify-content-center align-items-start">
            <h1>Love Thy Neighbor!</h1>
            <p>
              Let’s build a strong, dynamic and caring community that uplifts
              each other.
            </p>
            <CATButton className="cta-button">Join Us!</CATButton>
          </Col>
          <Col className="p-0">
            <img src={img} alt="img" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PrimaryHero;
