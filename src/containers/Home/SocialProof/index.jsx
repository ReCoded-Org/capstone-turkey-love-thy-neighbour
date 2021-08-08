import React from "react";

import { Container, Accordion } from "react-bootstrap";
import AvatarSVG from "../../../images/avatar-one.svg";

function SocialProof() {
  return (
    <section className="social-proof-section container-fluid">
      <Container className="social-proof-content-container d-flex flex-column justify-content-around">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="d-flex align-items-center">
              <img src={AvatarSVG} alt="avatar svg" />
              <div className="d-flex flex-column">
                <p style={{ padding: "0", margin: "0" }}>Accordion Item #1</p>
                <small style={{ padding: "0", margin: "0", display: "block" }}>
                  Istanbul, Kadikoy
                </small>
              </div>
            </Accordion.Header>
            <Accordion.Body>First accordion body</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>Second accordion body</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>Third accordion body</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}

export default SocialProof;
