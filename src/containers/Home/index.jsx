import React from "react";

import { Container } from "react-bootstrap";

import PrimaryHero from "../../components/PrimaryHero";
import SecondaryHero from "../../components/SecondaryHero";
import Features from "../../components/Features";

import "./index.scss";

function Home() {
  return (
    <Container fluid className="section-wrapper">
      <PrimaryHero />
      <SecondaryHero />
      <Features />
    </Container>
  );
}

export default Home;
