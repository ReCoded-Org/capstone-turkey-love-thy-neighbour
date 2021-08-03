// react
import React from "react";

// react-bootstrap
import { Container } from "react-bootstrap";

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Router>
        <p>Navbar</p>
        <Switch>
          <Route exact path="/home">
            <p>Home</p>
          </Route>
          <Route exact path="/profile">
            <p>Profile</p>
          </Route>
          <Route exact path="/users">
            <p>Users</p>
          </Route>
          <Route exact path="/meet">
            <p>Meet</p>
          </Route>
          <Route exact path="/sign-in">
            <p>Sign In</p>
          </Route>
          <Route exact path="/sign-up">
            <p>Sign Up</p>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
