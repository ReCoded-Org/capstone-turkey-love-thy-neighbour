import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import { ReactComponent as TwitterLogo } from "../../images/twitter-logo.svg";
import { ReactComponent as InstagramLogo } from "../../images/instagram-logo.svg";
import { ReactComponent as FacebookLogo } from "../../images/facebook-logo.svg";
import { ReactComponent as Globe } from "../../images/LanguageGlobe/globe.svg";
import { LanguageButton } from "../CustomButtons";
import "./index.scss";

function Footer() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <footer className="footer container-fluid d-flex align-items-center pt-2">
      <Container>
        <Row className="footer-content-row w-100 h-100">
          <Col
            xs={12}
            sm={12}
            md={4}
            className="mt-3 mt-sm-3 mt-md-0 d-flex justify-content-center justify-content-sm-center justify-content-md-start align-items-center"
          >
            <Link to={{ pathname: "/our-team" }}>{t("footer_team")}</Link>
            <Link to={{ pathname: "/contact-us" }} className="mx-3">
              {t("footer_contact")}
            </Link>
            <Link to={{ pathname: "/faq" }}>{t("footer_faq")}</Link>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            className="d-flex justify-content-center align-items-center my-2 my-sm-2 my-sm-0"
          >
            <div className="d-flex flex-column justify-content-center align-items-center">
              <LanguageButton
                onClick={() => {
                  if (language === "TR") {
                    setLanguage("EN");
                    return;
                  }
                  setLanguage("TR");
                }}
                type="submit"
              >
                <Globe /> {language}
              </LanguageButton>
              <p>{t("footer_copyright")}</p>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            className="social-media-logos d-flex justify-content-center justify-content-sm-center justify-content-md-end align-items-center"
          >
            <div />
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="external noreferrer"
            >
              <TwitterLogo />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="external noreferrer"
            >
              <InstagramLogo />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="external noreferrer"
            >
              <FacebookLogo />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
