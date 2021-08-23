import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import { ReactComponent as NetworkImg } from "../../images/network.svg";
import { ReactComponent as SpeechBubbleImg } from "../../images/speech-bubble.svg";
import { ReactComponent as CouponImg } from "../../images/coupon.svg";

import "./index.scss";

// TODO: add real content

function Features() {
  return (
    <section className="features-section container-fluid">
      <Container className="features-content-container d-flex flex-column justify-content-center">
        <h2>Features</h2>
        <Row className="features-content-row d-md-flex justify-content-md-around text-center">
          <Col xs={12} sm={12} md={3}>
            <Card className="d-flex flex-column align-items-center justify-content-center">
              <NetworkImg className="network-svg img-fluid" />
              <Card.Title>Meet</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&lsquo;s content.
              </Card.Text>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={3} className="my-1 my-sm-2 my-md-0">
            <Card className="d-flex flex-column align-items-center justify-content-center">
              <SpeechBubbleImg className="speech-bubble-svg img-fluid" />

              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&lsquo;s content.
              </Card.Text>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={3}>
            <Card className="d-flex flex-column align-items-center justify-content-center">
              <CouponImg className="coupon-svg img-fluid" />

              <Card.Title>Coupons</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&lsquo;s content.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
