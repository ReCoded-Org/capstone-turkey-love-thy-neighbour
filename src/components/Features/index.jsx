import React from "react";

import { useTranslation } from "react-i18next";

import { Container, Row, Col, Card } from "react-bootstrap";

import { ReactComponent as NetworkImg } from "../../images/network.svg";
import { ReactComponent as FilterImg } from "../../images/filter.svg";
import { ReactComponent as CouponImg } from "../../images/coupon.svg";

import "./index.scss";

function Features() {
  const { t } = useTranslation();

  return (
    <section className="features-section container-fluid">
      <Container className="features-content-container d-flex flex-column justify-content-center">
        <h2>{t("features_title")}</h2>
        <Row className="features-content-row d-md-flex justify-content-md-around text-center">
          <Col xs={12} sm={12} md={3}>
            <Card className="d-flex flex-column align-items-center justify-content-center">
              <NetworkImg className="network-svg img-fluid" />
              <Card.Title>{t("features_title_meet")}</Card.Title>
              <Card.Text>{t("features_title_meet_text")}</Card.Text>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={3} className="my-1 my-sm-2 my-md-0">
            <Card className="d-flex flex-column align-items-center justify-content-center">
              <FilterImg className="speech-bubble-svg img-fluid" />

              <Card.Title>{t("features_title_message")}</Card.Title>
              <Card.Text>{t("features_title_message_text")}</Card.Text>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={3}>
            <Card className="d-flex flex-column align-items-center justify-content-center">
              <CouponImg className="coupon-svg img-fluid" />

              <Card.Title>{t("features_title_coupons")}</Card.Title>
              <Card.Text>{t("features_title_coupons_text")}</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
