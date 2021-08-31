import React from "react";

import { Container } from "react-bootstrap";

import PrimaryHero from "../../components/PrimaryHero";
import SecondaryHero from "../../components/SecondaryHero";
import SocialProof from "../../components/SocialProof";
import Features from "../../components/Features";
import FAQ from "../../components/FAQ";
import Subscription from "../../components/Subscription";

import "./index.scss";

function Home() {
  return (
    <Container fluid className="section-wrapper">
      <PrimaryHero />
      <SecondaryHero />
      <SocialProof />
      <Features />
      <FAQ />
      <Subscription />
    </Container>
  );
}

export default Home;
