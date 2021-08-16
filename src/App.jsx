import React from "react";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import ContactUs from "./containers/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <Container fluid style={{ minHeight: "100vh" }}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
