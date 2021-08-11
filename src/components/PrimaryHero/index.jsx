import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { CTAButton } from "../CustomButton";

import "./index.scss";
import img from "../../images/PrimaryHeroContentBgImg.png";

function PrimaryHero() {
  return (
    <section className="primary-hero-img-bg container-fluid">
      <Container className="primary-hero-content-container d-flex align-items-center">
        <Row className="primary-hero-content-row m-0">
          <Col
            xs={12}
            sm={12}
            md={6}
            className="first-column p-0 pb-xs-5 pb-md-5 d-flex flex-column justify-content-center align-items-start"
          >
            <h1>Love Thy Neighbor!</h1>
            <p>
              Let’s build a strong, dynamic and caring community that uplifts
              each other.
            </p>
            <CTAButton>Join Us!</CTAButton>
            {/* TODO: Show sign up pop up when clicked */}
          </Col>
          <Col xs={12} sm={12} md={6} className="p-0 px-xs-1 px-md-1 h-100">
            <img src={img} alt="img" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PrimaryHero;