import React from "react";

import { useTranslation } from "react-i18next";
import { Container, Row } from "react-bootstrap";

import TeammateCard from "../../components/TeammateCard";

import imgAli from "../../images/OurTeam/aliriza.jpg";
import imgKutay from "../../images/OurTeam/kutay.jpg";
import imgMoulham from "../../images/OurTeam/moulham.png";
import imgNur from "../../images/OurTeam/nur.jpg";
import imgShrreya from "../../images/OurTeam/shrreya.jpeg";
import imgAziza from "../../images/OurTeam/aziza.jpg";

import "./index.scss";

function OurTeam() {
  const { t } = useTranslation();
  return (
    <section className="ourteam-section container-fluid d-flex flex-column justify-content-center">
      <Container className="ourteam-content-container">
        <h2 className="text-center mt-4 mb-4">{t("ourteam_title")}</h2>
        <Row className="ourteam-content-row m-0">
          <TeammateCard
            image={imgShrreya}
            githubUrl="https://github.com/Shrreya"
            linkedInUrl="https://www.linkedin.com/in/shrreya/"
            twitterUrl="https://twitter.com/__shrreya__"
            jobTitle="Team Lead"
            firstName="Shrreya"
            lastName="Bhatachaarya"
          />
          <TeammateCard
            image={imgAli}
            githubUrl="https://github.com/ARS-coding"
            linkedInUrl="https://www.linkedin.com/in/ars-coding/"
            twitterUrl="https://twitter.com/ARS_coding"
            jobTitle="Front End Web Developer"
            firstName="Ali Riza"
            lastName="Sahin"
          />
          <TeammateCard
            image={imgMoulham}
            githubUrl="https://github.com/MoulhamHallak"
            linkedInUrl="https://www.linkedin.com/in/mahmoud-moulham-hallak-a2a688147/"
            twitterUrl="https://twitter.com/Moulham990"
            jobTitle="Front End Web Developer"
            firstName="Moulham"
            lastName="Hallak"
          />
          <TeammateCard
            image={imgKutay}
            githubUrl="https://github.com/Iseluin"
            linkedInUrl="https://www.linkedin.com"
            twitterUrl="https://twitter.com"
            jobTitle="Front End Web Developer"
            firstName="Kutay Kagan"
            lastName="Ozen"
          />
          <TeammateCard
            image={imgAziza}
            githubUrl="https://github.com/mimisha25"
            linkedInUrl="https://www.linkedin.com/in/mia-l-10b9a81b1/"
            twitterUrl="https://twitter.com"
            jobTitle="Front End Web Developer"
            firstName="Aziza"
            lastName="Iliasova"
          />
          <TeammateCard
            image={imgNur}
            githubUrl="https://github.com/nurbacaksiz"
            linkedInUrl="https://www.linkedin.com/in/h-nur-bacaks%C4%B1z-b352b2182"
            twitterUrl="https://twitter.com"
            jobTitle="Front End Web Developer"
            firstName="Hafise Nur"
            lastName="Bacaksiz"
          />
        </Row>
      </Container>
    </section>
  );
}

export default OurTeam;
