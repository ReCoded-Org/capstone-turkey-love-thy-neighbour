// react
import React from "react";

// react-bootstrap
import { Container } from "react-bootstrap";

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import NavBar from "./components/NavBar";

function App() {
  return (
    <Container fluid style={{ minHeight: "100vh", padding: "0" }}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/home">
            <p>Home</p>
          </Route>
          <Route path="/profile">
            <p>Profile</p>
          </Route>
          <Route path="/users">
            <p>Users</p>
          </Route>
          <Route path="/meet">
            <p>Meet</p>
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
