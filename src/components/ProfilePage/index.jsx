import React, { useState } from "react";
import { Container, Button, Card } from "react-bootstrap";

import "./index.scss";
import PPMaleSVG from "../../images/ProfilePage/PPMaleSVG.svg";
import EditProfileModal from "../EditProfileModal";
import SignInModal from "../SignInModal";
import SignUpModal from "../SignUpModal";
// import PPFemaleSVG from "../../images/ProfilePage/PPFemaleSVG.svg";

const ProfilePage = () => {
  // modal states
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => setShowModal(!showModal);

  const [showSignInModal, setShowSignInModal] = useState(false);
  const handleClickSignIn = () => setShowSignInModal(!showSignInModal);

  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const handleClickSignUp = () => setShowSignUpModal(!showSignUpModal);

  return (
    <section className="profile-page-bg">
      <Container className="profile-page-main-container d-flex flex-column justify-content-center align-items-center flex-wrap align-content-center">
        {/* TODO: Make the gap between the sections smaller */}
        <section>
          <Container>
            <img className="profile-photo" alt="profilePic" src={PPMaleSVG} />
          </Container>
        </section>

        <section>
          <Button onClick={handleClick} className="edit-button" type="submit">
            Edit profile
          </Button>
          {showModal && (
            <EditProfileModal handleClick={handleClick} showModal={showModal} />
          )}

          <Button
            onClick={handleClickSignIn}
            className="edit-button"
            type="submit"
          >
            Sign In
          </Button>
          {showSignInModal && (
            <SignInModal
              handleClickSignIn={handleClickSignIn}
              showSignInModal={showSignInModal}
              handleClickSignUp={handleClickSignUp}
            />
          )}
          <Button
            onClick={handleClickSignUp}
            className="edit-button"
            type="submit"
          >
            Sign Up
          </Button>
          {showSignUpModal && (
            <SignUpModal
              handleClickSignUp={handleClickSignUp}
              showSignUpModal={showSignUpModal}
              handleClickSignIn={handleClickSignIn}
            />
          )}
        </section>

        <section>
          <Container className="cards-container d-flex justify-content-around flex-wrap">
            <Card className="info-cards white-cards">
              <Card.Body>
                <Card.Title className="card-title">General</Card.Title>
                {/* //TODO : Display the card items in such a way that no whitespace is unused inside the card */}
                <Card.Text>
                  <ul>
                    <li>
                      First Name: <span>Ali Rıza</span>
                    </li>
                    <li>
                      Last Name: <span>Şahin</span>
                    </li>
                    <li>
                      Gender: <span>Male</span>
                    </li>
                    <li>
                      Age: <span>19</span>
                    </li>
                    <li>
                      Education: <span>High School Graduate</span>
                    </li>
                    <li>
                      District: <span>Sultanbeyli</span>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="info-cards blue-cards">
              <Card.Body>
                <Card.Title className="card-title">About You</Card.Title>
                {/* //TODO : Display the card items in such a way that no whitespace is unused inside the card */}
                <Card.Text>
                  <ul>
                    <li>
                      Bio:{" "}
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Semper gravida tincidunt aliquam quam.
                      </span>
                    </li>
                    <li>
                      Interests:{" "}
                      <span>Learning, coding, collaborating, designing.</span>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="info-cards white-cards">
              <Card.Body>
                <Card.Title className="card-title">Contact</Card.Title>
                {/* //TODO : Display the card items in such a way that no whitespace is unused inside the card */}
                <Card.Text>
                  <ul>
                    <li>
                      Email: <span>ars.style@hotmail.com</span>
                    </li>
                    <li>
                      Phone: <span>+90 537 779 50 60</span>
                    </li>
                    <li>
                      Adress: <span>Somewhere in time</span>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </section>
      </Container>
    </section>
  );
};

export default ProfilePage;
