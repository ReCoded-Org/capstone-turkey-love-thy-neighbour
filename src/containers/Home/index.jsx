import React from "react";

import { Container } from "react-bootstrap";
import "./index.scss";
import FAQ from "../../components/FAQ";

function Home() {
  return (
    <Container fluid>
      <FAQ />
    </Container>
  );
}

export default Home;
