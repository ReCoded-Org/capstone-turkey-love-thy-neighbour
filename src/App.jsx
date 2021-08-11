import React from "react";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import Profile from "./containers/Profile";
import Neighbours from "./containers/Neighbours";
import Meet from "./containers/Meet";
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
          <Route path="/signin">
            <p>Sign In</p>
          </Route>
          <Route path="/signup">
            <p>Sign Up</p>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
