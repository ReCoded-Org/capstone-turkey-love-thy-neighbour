import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import NetworkImg from "../../images/network.svg";
import SpeechBubbleImg from "../../images/speech-bubble.svg";
import CouponImg from "../../images/coupon.svg";

import "./index.scss";

function Features() {
  return (
    <Container fluid>
      <Container>
        <h2>Features</h2>
        <Row className="features-content-row">
          <Col>
            <Card className="d-flex flex-column align-items-center">
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
          <Col>
            <Card className="d-flex flex-column align-items-center">
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
          <Col>
            <Card className="d-flex flex-column align-items-center justify-content-center">
              <img src={CouponImg} className="img-fluid" alt="coupon svg" />
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&lsquo;s content.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Features;
