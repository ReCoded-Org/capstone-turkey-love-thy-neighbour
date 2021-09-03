import React from "react";

import { useTranslation } from "react-i18next";

import { Dropdown } from "react-bootstrap";

import { ReactComponent as LanguageTogglerImage } from "../../images/languageTogglerImage.svg";
import { ReactComponent as USFlag } from "../../images/united.svg";
import { ReactComponent as TurkeyFlag } from "../../images/turkey.svg";

import "./index.scss";

function LanguageMenu({ language, setLanguage }) {
  const { t } = useTranslation();
  function changeLanguage(event) {
    const selectedLanguage = event.currentTarget.children[1].innerText;

    if (selectedLanguage === "Türkçe") {
      setLanguage("TR");
    } else if (selectedLanguage === "English") {
      setLanguage("EN");
    }
  }

  return (
    <Dropdown className="language-menu">
      <Dropdown.Toggle>
        <LanguageTogglerImage className="language-toggler-icon" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Header>
          <small>{t("language_title")}</small>
        </Dropdown.Header>

        <Dropdown.Divider />

        <button
          type="button"
          className={`d-flex align-items-center ${
            language === "EN" && "active-language"
          }`}
          onClick={(event) => changeLanguage(event)}
        >
          <USFlag />
          <span>{t("language_en")}</span>
        </button>
        <button
          type="button"
          className={`d-flex align-items-center ${
            language === "TR" && "active-language"
          }`}
          onClick={(event) => changeLanguage(event)}
        >
          <TurkeyFlag />
          <span>{t("language_tr")}</span>
        </button>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageMenu;
