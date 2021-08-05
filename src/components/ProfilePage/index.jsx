import React from "react";
import { Container, Button, Card } from "react-bootstrap";

import "./index.scss";
import PPMaleSVG from "../../images/ProfilePage/PPMaleSVG.svg";
import PPFemaleSVG from "../../images/ProfilePage/PPFemaleSVG.svg";

const ProfilePage = () => {
    return (
        <section className="profile-page-bg">
            <Container className="profile-page-main-container">
                {/* TODO: Make the gap between the sections smaller */}
                <section>
                    <Container>
                        <img
                            className="profile-photo"
                            src={PPMaleSVG}
                            alt="profile-photo"
                        />
                    </Container>
                </section>

                <section>
                    <Button className="edit-button" type="submit">Edit profile</Button>
                </section>

                <section>
                    <Container className="cards-container">
                        <Card className="info-cards white-cards">
                            <Card.Body>
                                <Card.Title className="card-title">General</Card.Title>
                                {/* //TODO : Display the card items in such a way that no whitespace is unused inside the card */}
                                <Card.Text>
                                    <ul>
                                        <li>First Name: <span>Ali Rıza</span></li>
                                        <li>Last Name: <span>Şahin</span></li>
                                        <li>Gender: <span>Male</span></li>
                                        <li>Age: <span>19</span></li>
                                        <li>Education: <span>High School Graduate</span></li>
                                        <li>District: <span>Sultanbeyli</span></li>
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
                                        <li>Bio: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper gravida tincidunt aliquam quam.</span></li>
                                        <li>Interests: <span>Learning, coding, collaborating, designing.</span></li>
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
                                        <li>Email: <span>ars.style@hotmail.com</span></li>
                                        <li>Phone: <span>+90 537 779 50 60</span></li>
                                        <li>Adress: <span>Somewhere in time</span></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </section>
            </Container >
        </section >
    );
};

export default ProfilePage;
