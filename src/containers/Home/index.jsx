import React from "react";

import { Container } from "react-bootstrap";

import PrimaryHero from "../../components/PrimaryHero";
import SecondaryHero from "../../components/SecondaryHero";
import SocialProof from "../../components/SocialProof";
import Features from "../../components/Features";
import FAQContent from "../../components/FAQContent";

import "./index.scss";

function Home() {
  return (
    <Container fluid className="section-wrapper">
      <PrimaryHero />
      <SecondaryHero />
      <SocialProof />
      <Features />
      <section className="container-fluid">
        <FAQContent />
      </section>
    </Container>
  );
}

export default Home;
