import React from "react";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./containers/Home";

function App() {
  return (
    <Container fluid className="main-wrapper">
      <Router>
        <NavBar /> {/* Always dispaly it at the top */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/neighbors">
            <Neighbors />
          </Route>
          <Route path="/meet">
            <Meet />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
