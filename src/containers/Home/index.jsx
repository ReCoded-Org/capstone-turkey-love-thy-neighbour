import React from "react";

import { Container } from "react-bootstrap";

import PrimaryHero from "./PrimaryHero";
import SecondaryHero from "./SecondaryHero";

import "./index.scss";

function Home() {
  return (
    <Container fluid className="section-wrapper">
      <PrimaryHero />
      <SecondaryHero />
    </Container>
  );
}

export default Home;
