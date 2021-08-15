import React from "react";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import OurTeam from "./containers/OurTeam";
import Footer from "./components/Footer";

function App() {
  return (
    <Container fluid style={{ minHeight: "100vh" }}>
      <Router>
        <NavBar /> {/* Always dispaly it at the top */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/our-team">
            <OurTeam />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
