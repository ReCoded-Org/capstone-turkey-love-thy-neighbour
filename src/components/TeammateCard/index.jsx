import React from "react";

import { Col, Card } from "react-bootstrap";

import { ReactComponent as TwitterLogo } from "../../images/twitter.svg";
import { ReactComponent as LinkedInLogo } from "../../images/linkedIn.svg";
import { ReactComponent as GithubLogo } from "../../images/github.svg";

import "./index.scss";

function TeammateCard({
  image,
  githubUrl,
  linkedInUrl,
  twitterUrl,
  jobTitle,
  firstName,
  lastName,
}) {
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      className="teammate-card-column p-0 mb-3 mx-auto d-flex justify-content-center"
    >
      <Card className="teammate-card">
        <Card.Img src={image} alt="teammate" />

        <Card.Body className="p-0 d-flex flex-column justify-content-between">
          <div className="mt-2">
            <h2 className="mx-auto my-0 text-center">
              {firstName}
              <br />
              {lastName}
            </h2>
            <Card.Text className="mx-auto text-center">{jobTitle}</Card.Text>
          </div>

          <div className="d-flex justify-content-around mb-2 mt-3">
            {" "}
            <a
              href={githubUrl}
              target="_blank"
              rel="external noreferrer"
              aria-label="GitHub Logo"
            >
              <GithubLogo />
            </a>{" "}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="external noreferrer"
              aria-label="LinkedIn Logo"
            >
              <LinkedInLogo />
            </a>
            <a
              href={twitterUrl}
              target="_blank"
              rel="external noreferrer"
              aria-label="Twitter Logo"
            >
              <TwitterLogo />
            </a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default TeammateCard;
