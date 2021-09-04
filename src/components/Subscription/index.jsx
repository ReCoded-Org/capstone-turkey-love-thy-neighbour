import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { Container, Row, Col } from "react-bootstrap";

import { ReactComponent as PhoneAndNotificationsImg } from "../../images/PhoneandNotifications.svg";
import { ReactComponent as CheckIcon } from "../../images/Check.svg";

import "./index.scss";

function Subscription() {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  return (
    <section className="subscription-img-bg container-fluid">
      <Container className="subscription-content-container d-flex align-items-center">
        <Row className="subscription-content-row m-0">
          <Col
            xs={12}
            sm={12}
            md={6}
            className="first-column d-flex flex-column justify-content-center align-items-start"
          >
            <h1>
              {t("newsletter_title_one")} <br /> {t("newsletter_title_two")}
            </h1>
            <h3>{t("newsletter_update")}</h3>
            <p>{t("newsletter_subscribe")}</p>
            <form
              className="d-flex"
              onSubmit={(event) => {
                event.preventDefault();
                setEmail("");
              }}
            >
              <input
                type="email"
                className="form-email"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!email}
              >
                <CheckIcon className="check-icon" />
              </button>
            </form>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            className="my-md-auto d-flex d-sm-flex d-md-block justify-content-center justify-content-sm-center justify-content-md-center"
          >
            <PhoneAndNotificationsImg />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Subscription;
