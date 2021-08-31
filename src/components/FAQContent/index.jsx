import React from "react";

import { useTranslation } from "react-i18next";

import { Container, Row, Col } from "react-bootstrap";

import questionMarkImg from "../../images/UndrawQuestion.png";

import "./index.scss";

function FAQContent() {
  const { t, i18n } = useTranslation();
  return (
    <Container className="faq-content-container d-flex align-items-center">
      <Row className="faq-content-row m-0">
        <Col
          xs={12}
          sm={12}
          md={6}
          className="first-column d-flex flex-column justify-content-center align-items-start"
        >
          <h2>{t("global_FAQ")}</h2>
          <h5>{t("global_safety")}</h5>
          <p>{t("global_safety-text")}</p>
          <h5>{t("global_the_point")}</h5>
          <p>{t("global_the_point_text")}</p>
          <h5>{t("global_how_it_works")}</h5>
          <p>{t("global_how_it_works_text")}</p>
        </Col>

        <Col
          xs={12}
          sm={12}
          md={6}
          className="my-md-auto d-flex d-sm-flex d-md-block justify-content-center justify-content-sm-center justify-content-md-center"
        >
          <img src={questionMarkImg} alt="img" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default FAQContent;
