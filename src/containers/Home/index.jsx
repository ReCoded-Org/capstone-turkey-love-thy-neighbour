import React from "react";

import { Container } from "react-bootstrap";

import Subscription from "../../components/Subscription";

import "./index.scss";

function Home() {
  return (
    <Container fluid className="section-wrapper">
      <Subscription />
    </Container>
  );
}

export default Home;
