import React from "react";

import { Container } from "react-bootstrap";

import Features from "../../components/Features";
import PrimaryHero from "../../components/PrimaryHero";

import "./index.scss";

function Home() {
  return (
    <Container fluid>
      <PrimaryHero />
      <Features />
    </Container>
  );
}

export default Home;
