import React from "react";

import { Container } from "react-bootstrap";

import PrimaryHero from "../../components/PrimaryHero";

import "./index.scss";

function Home() {
  return (
    <Container fluid>
      <PrimaryHero />
    </Container>
  );
}

export default Home;
