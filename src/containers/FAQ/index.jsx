import React from "react";

import { Container } from "react-bootstrap";

import FAQContent from "../../components/FAQContent";

function FAQ() {
  return (
    <Container fluid style={{ height: "calc(100vh - 120px)" }}>
      <FAQContent />
    </Container>
  );
}

export default FAQ;
