import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { init } from "emailjs-com";

import { listenForAuthChanges } from "./slices/userSlice";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./containers/Home";
import Profile from "./containers/Profile";
import Neighbors from "./containers/Neighbors";
import Meet from "./containers/Meet";
import OurTeam from "./containers/OurTeam";
import ContactUs from "./containers/ContactUs";
import FAQ from "./containers/FAQ";

import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";

// TODO: if the users are signed in, show them their profile when they click on the navbar logo

// TODO: add more recommended places

// TODO: redirect users whenever they sign in with google or facebook to profile

function App() {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.user.isSignedIn);

  useEffect(() => {
    dispatch(listenForAuthChanges());
    init("user_pFNaLnNszOqQi0CkGO628");
  }, [dispatch]);

  return (
    <Container fluid className="main-wrapper">
      <Router>
        {/* Always display it at the top */}
        <NavBar />
        <SignInModal />
        <SignUpModal />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile/:uid">
            {isSignedIn ? <Profile /> : <Home />}
          </Route>
          <Route path="/meet">{isSignedIn ? <Meet /> : <Home />}</Route>
          <Route path="/neighbors">
            {isSignedIn ? <Neighbors /> : <Home />}
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
        {/* Always display it at the bottom */}
      </Router>
    </Container>
  );
}

export default App;
