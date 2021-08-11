import React from "react";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import Profile from "./containers/Profile";
import Neighbours from "./containers/Neighbours";
import Meet from "./containers/Meet";
import OurTeam from "./containers/OurTeam";
import ContactUs from "./containers/ContactUs";
import FAQ from "./containers/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <Container fluid style={{ minHeight: "100vh" }}>
      <Router>
        <NavBar /> {/* Always dispaly it at the top */}
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/neighbours">
            <Neighbours />
          </Route>
          <Route path="/meet">
            <Meet />
          </Route>
          <Route path="/our-team">
            <OurTeam />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
