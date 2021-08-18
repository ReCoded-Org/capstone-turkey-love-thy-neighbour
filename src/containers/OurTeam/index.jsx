import React from "react";

import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Linkedn } from "../../images/linkedn.svg";
import { ReactComponent as Github } from "../../images/github.svg";
import img from "../../images/ImgPlacehorder.png";
import "./index.scss";

function OurTeam() {
  return (
    <Container className="ourteam-content-container d-flex flex-column justify-content-center">
      <h4>Here’s our hard working development team:</h4>

      <Carousel>
        <Carousel.Item>
          <Row className="ourteam-content-row d-md-flex justify-content-center">
            <Col xs={12} sm={12} md={3}>
              <Card className="carda d-flex flex-column align-items-center justify-content-center">
                <img src={img} alt="img" className="img-fluid" />
                <Card.Title> Shrreya Bhatachaarya </Card.Title>
                <p>Lead Trainer</p>
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  className="social-media-logos d-flex justify-content-center align-items-center"
                >
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Linkedn />
                  </a>
                  <a
                    href="https://www.github.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="ourteam-content-row d-md-flex justify-content-center">
            <Col xs={12} sm={12} md={3}>
              <Card className="carda d-flex flex-column align-items-center justify-content-center">
                <img src={img} alt="img" className="img-fluid" />
                <Card.Title>Moulham 1 Hallak</Card.Title>
                <p>Junior Software Developer</p>
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  className="social-media-logos d-flex justify-content-center align-items-center"
                >
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Linkedn />
                  </a>
                  <a
                    href="https://www.github.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} className="my-1 my-sm-2 my-md-0">
              <Card className="carda d-flex flex-column align-items-center justify-content-center">
                <img src={img} alt="img" className="img-fluid" />

                <Card.Title>Moulham 2 Hallak</Card.Title>
                <p>Junior Software Developer</p>
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  className="social-media-logos d-flex justify-content-center align-items-center"
                >
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Linkedn />
                  </a>
                  <a
                    href="https://www.github.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <Card className="carda d-flex flex-column align-items-center justify-content-center">
                <img src={img} alt="img" className="img-fluid" />

                <Card.Title>Moulham 3 Hallak</Card.Title>
                <p>Junior Software Developer</p>
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  className="social-media-logos d-flex justify-content-center align-items-center"
                >
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Linkedn />
                  </a>
                  <a
                    href="https://www.github.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="ourteam-content-row d-md-flex justify-content-center">
            <Col xs={12} sm={12} md={3}>
              <Card className="carda d-flex flex-column align-items-center justify-content-center">
                <img src={img} alt="img" className="img-fluid" />
                <Card.Title>Moulham 4 Hallak </Card.Title>
                <p>Junior Software Developer</p>
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  className="social-media-logos d-flex justify-content-center align-items-center"
                >
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Linkedn />
                  </a>
                  <a
                    href="https://www.github.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} className="my-1 my-sm-2 my-md-0">
              <Card className="carda d-flex flex-column align-items-center justify-content-center">
                <img src={img} alt="img" className="img-fluid" />
                <Card.Title>Moulham 5 Hallak </Card.Title>
                <p>Junior Software Developer</p>
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  className="social-media-logos d-flex justify-content-center align-items-center"
                >
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Linkedn />
                  </a>
                  <a
                    href="https://www.github.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <Github />
                  </a>
                </Col>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default OurTeam;
