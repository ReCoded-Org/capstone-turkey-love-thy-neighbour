import React from "react";

import { Container, Accordion } from "react-bootstrap";
import AvatarSVG from "../../../images/avatar-one.svg";

import "./index.scss";

function SocialProof() {
  return (
    <section className="social-proof-section container-fluid">
      <Container className="social-proof-content-container d-flex flex-column justify-content-around">
        <Accordion defaultActiveKey="0">
          <Accordion.Item className="first-accordion" eventKey="0">
            <Accordion.Header className="d-flex align-items-center">
              <img src={AvatarSVG} alt="avatar svg" />
              <div className="d-flex flex-column">
                <p style={{ padding: "0", margin: "0" }}>Sammy Walson</p>
                <small style={{ padding: "0", margin: "0", display: "block" }}>
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
                <small style={{ padding: "0", margin: "0", display: "block" }}>
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
                <small style={{ padding: "0", margin: "0", display: "block" }}>
                  Istanbul, Kadikoy
                </small>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Add some text about how they like to use our services...
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}

export default SocialProof;
