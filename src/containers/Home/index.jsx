import React from "react";

import { Container } from "react-bootstrap";

import PrimaryHero from "./PrimaryHero";
import SecondarySection from "./SecondaryHero";

import "./index.scss";

function Home() {
  return (
    <Container fluid className="section-wrapper">
      <PrimaryHero />
      <SecondarySection />
    </Container>
  );
}

export default Home;
