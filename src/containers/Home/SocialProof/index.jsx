import React from "react";

import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function SocialProof() {
  return (
    <section className="social-proof-section container-fluid">
      <Container className="social-proof-content-container d-flex flex-column justify-content-center">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>First accordion body</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>Second accordion body</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}

export default SocialProof;
