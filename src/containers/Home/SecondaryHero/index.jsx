import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import img from "../../../utils/SecondaryHeroContentBgImg.png";
import "./index.scss";

function SecondaryHero() {
  return (
    <section className="secondary-hero-img-bg container-fluid">
      <Container className="secondary-hero-content-container d-flex align-items-center">
        <Row className="secondary-hero-content-row m-0">
          <Col
            xs={{ span: 12, order: "last" }}
            sm={{ span: 12, order: "last" }}
            md={{ span: 6, order: "first" }}
            className="p-0 px-xs-1 px-md-1 h-100 d-flex justify-content-xs-start justify-content-sm-start justify-content-md-center align-items-md-center"
          >
            <img src={img} alt="img" className="img-fluid" />
          </Col>
          <Col
            xs={{ span: 12, order: "first" }}
            sm={{ span: 12, order: "first" }}
            md={{ span: 6, order: "last" }}
            className="px-0 pt-xs-5 pt-xs-5 pt-md-0 d-flex flex-column justify-content-center align-items-start"
          >
            <h2>Welcome,</h2>
            <h1 className="to-be-welcomed">to be welcomed.</h1>
            <p>
              Respect each other and feel the genuine <span>connection.</span>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SecondaryHero;
