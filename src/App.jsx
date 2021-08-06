// react
import React from "react";

// react-bootstrap
import { Container } from "react-bootstrap";

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import NavBar from "./components/NavBar";

// containers
import Home from "./containers/Home";
import Profile from "./containers/Profile";
import Neighbours from "./containers/Neighbours";
import Meet from "./containers/Meet";

function App() {
  return (
    <Container fluid style={{ minHeight: "100vh" }}>
      <Router>
        <NavBar /> {/* Always dispaly it at the top */}
        <Switch>
          <Route exact path="/">
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
      </Router>
    </Container>
  );
}

export default App;
