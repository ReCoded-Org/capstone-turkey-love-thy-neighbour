import React, { useState } from "react";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./containers/Home";
import Profile from "./containers/Profile";
import Neighbors from "./containers/Neighbors";
import Meet from "./containers/Meet";
import SignInModal from "./components/SignInModal";
import SingUpModal from "./components/SignUpModal";

function App() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const handleClickSignIn = () => setShowSignInModal(!showSignInModal);

  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const handleClickSignUp = () => setShowSignUpModal(!showSignUpModal);

  return (
    <Container fluid className="main-wrapper">
      <Router>
        <NavBar
          handleClickSignIn={handleClickSignIn}
          handleClickSignUp={handleClickSignUp}
        />
        {/* Always display it at the top */}
        <SignInModal
          showSignInModal={showSignInModal}
          handleClickSignIn={handleClickSignIn}
          handleClickSignUp={handleClickSignUp}
        />
        <SingUpModal
          showSignUpModal={showSignUpModal}
          handleClickSignIn={handleClickSignIn}
          handleClickSignUp={handleClickSignUp}
        />
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
