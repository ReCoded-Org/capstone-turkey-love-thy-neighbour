import React from "react";

import { Container } from "react-bootstrap";

import FAQ from "../../components/FAQ";
import PrimaryHero from "../../components/PrimaryHero";
import SecondaryHero from "../../components/SecondaryHero";

import "./index.scss";

function Home() {
  return (
    <Container fluid className="section-wrapper">
      <PrimaryHero />
      <SecondaryHero />
      <FAQ />
    </Container>
  );
}

export default Home;
