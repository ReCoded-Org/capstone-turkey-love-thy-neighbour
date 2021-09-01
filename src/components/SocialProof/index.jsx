import React from "react";

import { useTranslation } from "react-i18next";

import { Container, Row, Col, Accordion, Carousel } from "react-bootstrap";
import { ReactComponent as MaleAvatarSVG } from "../../images/SocialProof/male-avatar.svg";
import { ReactComponent as FemaleAvatarSVG } from "../../images/SocialProof/female-avatar.svg";
import MeetingOne from "../../images/SocialProof/meeting-one.png";
import MeetingTwo from "../../images/SocialProof/meeting-two.png";
import MeetingThree from "../../images/SocialProof/meeting-three.png";

import "./index.scss";

function SocialProof() {
  const { t } = useTranslation();
  return (
    <section className="snapping-section social-proof-section container-fluid">
      <Container className="social-proof-content-container d-flex align-items-center">
        <Row className="social-proof-content-row m-0 gap-2">
          <Col xs={12} sm={12} md={5} className="first-column">
            <h2 className="text-center text-sm-center text-md-start">
              {t("home_what_neighbors_say")}
            </h2>
            <Accordion
              defaultActiveKey={window.innerWidth >= 768 ? "0" : undefined}
            >
              <Accordion.Item className="first-accordion-item" eventKey="0">
                <Accordion.Header className="d-flex align-items-center">
                  {/* <img src={MaleAvatarSVG} alt="avatar svg" /> */}
                  <MaleAvatarSVG />
                  <div className="d-flex flex-column">
                    <p style={{ padding: "0", margin: "0" }}>Sammy Walson</p>
                    <small
                      style={{ padding: "0", margin: "0", display: "block" }}
                    >
                      Istanbul, Uskudar
                    </small>
                  </div>
                </Accordion.Header>
                <Accordion.Body>{t("home_sammy_walson")}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="second-accordion-item" eventKey="1">
                <Accordion.Header className="d-flex align-items-center">
                  <FemaleAvatarSVG />
                  <div className="d-flex flex-column">
                    <p style={{ padding: "0", margin: "0" }}>Violet Jenning</p>
                    <small
                      style={{ padding: "0", margin: "0", display: "block" }}
                    >
                      Istanbul, Kadikoy
                    </small>
                  </div>
                </Accordion.Header>
                <Accordion.Body>{t("home_violet_jenning")}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="third-accordion-item" eventKey="2">
                <Accordion.Header className="d-flex align-items-center">
                  {/* <img src={MaleAvatarSVG} alt="avatar svg" /> */}
                  <MaleAvatarSVG />
                  <div className="d-flex flex-column">
                    <p style={{ padding: "0", margin: "0" }}>
                      Andrew Fitzgerald
                    </p>
                    <small
                      style={{ padding: "0", margin: "0", display: "block" }}
                    >
                      Istanbul, Avcilar
                    </small>
                  </div>
                </Accordion.Header>
                <Accordion.Body>{t("home_andrew_fitzgerald")}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={5}
            className="second-column mt-xs-4 mt-sm-4 mt-md-0"
          >
            <h2 className="text-center text-sm-center text-md-start">
              {t("home_when_neighbors_meet")}
            </h2>
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
