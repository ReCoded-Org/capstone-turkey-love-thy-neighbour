import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { listenForAuthChanges } from "./userSlice";

import NavBar from "./components/NavBar";

import Home from "./containers/Home";
import Profile from "./containers/Profile";
import Neighbors from "./containers/Neighbors";
import Meet from "./containers/Meet";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listenForAuthChanges());
  }, [dispatch]);

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
