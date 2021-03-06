import React from "react";

import { useTranslation } from "react-i18next";

import { Container, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { CTAButton } from "../../components/CustomButtons/index";
import MeetImg from "../../images/meet.jpg";
import "./index.scss";

function Meet() {
  const { t } = useTranslation();
  const firstName = useSelector((state) => state.user.firestoreDoc?.firstName);

  return (
    <Container fluid className="meet-container-fluid d-flex align-items-center">
      <Container className="meet-content-container d-flex align-items-start align-items-sm-start align-items-md-center">
        <Row className="meet-row">
          <Col
            xs={{ span: 12, order: "last" }}
            sm={{ span: 12, order: "last" }}
            md={{ span: 6, order: "first" }}
            className="d-flex flex-column justify-content-center align-items-center align-items-sm-center align-items-md-start text-center text-sm-center text-md-start mb-3 mb-sm-3 mb-md-0"
          >
            <h3>
              {t("meet_hello")} {firstName}
            </h3>
            <h1>{t("meet_nearby")}</h1>
            <p>{t("meet_info_text")}</p>
            <CTAButton>
              <Link to="/neighbors">{t("meet_button")}</Link>
            </CTAButton>
          </Col>
          <Col
            xs={{ span: 12, order: "first" }}
            sm={{ span: 12, order: "first" }}
            md={{ span: 6, order: "last" }}
            className="d-flex justify-content-end"
          >
            <img src={MeetImg} className="img-fluid" alt="meet img" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Meet;
