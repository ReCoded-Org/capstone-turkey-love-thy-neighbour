import React from "react";

import { Container } from "react-bootstrap";

import PrimaryHero from "./PrimaryHero";
import SecondaryHero from "./SecondaryHero";
import SocialProof from "./SocialProof";

import "./index.scss";

function Home() {
  return (
    <Container fluid className="section-wrapper">
      <PrimaryHero />
      <SecondaryHero />
      <SocialProof />
    </Container>
  );
}

export default Home;
