// react
import React from "react";

// react-bootstrap
import { Container } from "react-bootstrap";

// components
import PrimaryHero from "./PrimaryHero";

function Home() {
  return (
    <Container fluid>
      <PrimaryHero />
    </Container>
  );
}

export default Home;
