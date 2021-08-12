import React from "react";

import { Container } from "react-bootstrap";

import FAQ from "../../components/FAQ";
import PrimaryHero from "../../components/PrimaryHero";

import "./index.scss";

function Home() {
  return (
    <Container fluid>
      <PrimaryHero />
      <FAQ />
    </Container>
  );
}

export default Home;
