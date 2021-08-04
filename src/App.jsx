// react
import React from "react";

// react-bootstrap
import { Container } from "react-bootstrap";

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// containers
import Home from "./containers/Home";
import Profile from "./containers/Profile";
import Users from "./containers/Users";
import Meet from "./containers/Meet";
import ContactUs from "./containers/ContactUs";
import OurTeam from "./containers/OurTeam";

function App() {
  return (
    <Container fluid style={{ minHeight: "100vh" }}>
      <Router>
        <NavBar />
        {/* Always dispaly it at the top */}
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/users">
            <Users />
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
            <p>FAQ</p>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
