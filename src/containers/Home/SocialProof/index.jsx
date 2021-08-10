import React from "react";

import { Container, Row, Col, Accordion, Carousel } from "react-bootstrap";
import AvatarSVG from "../../../images/avatar-one.svg";
import MeetingOne from "../../../images/meeting-one.png";
import MeetingTwo from "../../../images/meeting-two.png";
import MeetingThree from "../../../images/meeting-three.png";

import "./index.scss";

function SocialProof() {
  return (
    <section className="snapping-section social-proof-section container-fluid">
      <Container className="social-proof-content-container d-flex align-items-center">
        <Row className="social-proof-content-row gap-2">
          <Col xs={12} sm={12} md={5}>
            <h2>Experiences of Our Neighbors</h2>
            <Accordion>
              <Accordion.Item className="first-accordion" eventKey="0">
                <Accordion.Header className="d-flex align-items-center">
                  <img src={AvatarSVG} alt="avatar svg" />
                  <div className="d-flex flex-column">
                    <p style={{ padding: "0", margin: "0" }}>Sammy Walson</p>
                    <small
                      style={{ padding: "0", margin: "0", display: "block" }}
                    >
                      Istanbul, Kadikoy
                    </small>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Add some text about how they like to use our services...
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="second-accordion" eventKey="1">
                <Accordion.Header className="d-flex align-items-center">
                  <img src={AvatarSVG} alt="avatar svg" />
                  <div className="d-flex flex-column">
                    <p style={{ padding: "0", margin: "0" }}>Sammy Walson</p>
                    <small
                      style={{ padding: "0", margin: "0", display: "block" }}
                    >
                      Istanbul, Kadikoy
                    </small>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Add some text about how they like to use our services...
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="third-accordion" eventKey="2">
                <Accordion.Header className="d-flex align-items-center">
                  <img src={AvatarSVG} alt="avatar svg" />
                  <div className="d-flex flex-column">
                    <p style={{ padding: "0", margin: "0" }}>Sammy Walson</p>
                    <small
                      style={{ padding: "0", margin: "0", display: "block" }}
                    >
                      Istanbul, Kadikoy
                    </small>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Add some text about how they like to use our services...
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xs={12} sm={12} md={5}>
            <h2>Pictures of Their Meetings</h2>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src={MeetingOne}
                  alt="First meeting slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src={MeetingTwo}
                  alt="Second meeting slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src={MeetingThree}
                  alt="Third meeting slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SocialProof;
