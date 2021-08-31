import React from "react";

import { useTranslation } from "react-i18next";

import { Container, Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { CTAButton } from "../CustomButtons";
import BeKindImage from "../../images/PrimaryHeroContentBgImg.png";
import "./index.scss";

function PrimaryHero() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const isSignedIn = useSelector((state) => state.user.isSignedIn);

  return (
    <section className="snapping-section primary-hero-img-bg container-fluid">
      <Container className="primary-hero-content-container d-flex align-items-center">
        <Row className="primary-hero-content-row m-0">
          <Col
            xs={12}
            sm={12}
            md={6}
            className="first-column p-0 pb-2 pb-sm-2 pb-md-0 d-flex flex-column justify-content-center align-items-start"
          >
            <h1>{t("PrimaryHeroTitle")}</h1>
            <p>
              Let’s build a strong, dynamic and caring community that uplifts
              each other.
            </p>
            {!isSignedIn && (
              <CTAButton onClick={() => dispatch({ type: "signUp" })}>
                Join Us!
              </CTAButton>
            )}
          </Col>
          <Col xs={12} sm={12} md={6} className="px-0 ps-0 ps-sm-0 ps-md-3 ">
            <img src={BeKindImage} alt="img" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PrimaryHero;
