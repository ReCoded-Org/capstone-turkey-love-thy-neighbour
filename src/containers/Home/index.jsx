import React from "react";

import { Container } from "react-bootstrap";

// import PrimaryHero from "../../components/PrimaryHero";
// import SecondaryHero from "../../components/SecondaryHero";
import Subscription from "../../components/Subscription";

import "./index.scss";

function Home() {
  return (
    <Container fluid className="section-wrapper">
      {/* <PrimaryHero />
      <SecondaryHero /> */}
      <Subscription />
    </Container>
  );
}

export default Home;
