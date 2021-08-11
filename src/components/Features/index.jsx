import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import NetworkImg from "../../images/network.svg";
import SpeechBubbleImg from "../../images/speech-bubble.svg";
import CouponImg from "../../images/coupon.svg";

import "./index.scss";

function Features() {
  return (
    <section className="container-fluid">
      <Container className="features-content-container d-flex flex-column justify-content-center">
        <h2>Features</h2>
        <Row className="features-content-row">
          <Col xs={12} sm={12} md={4}>
            <Card className="d-flex flex-column align-items-center justify-content-start">
              <img src={NetworkImg} className="img-fluid" alt="network svg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&lsquo;s content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <Card className="d-flex flex-column align-items-center justify-content-start">
              <img
                src={SpeechBubbleImg}
                className="img-fluid"
                alt="speech bubble svg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&lsquo;s content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <Card className="d-flex flex-column align-items-center justify-content-start">
              <img src={CouponImg} className="img-fluid" alt="coupon svg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&lsquo;s content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
