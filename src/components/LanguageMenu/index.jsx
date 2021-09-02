import React from "react";

import { Dropdown } from "react-bootstrap";

import { ReactComponent as LanguageTogglerImage } from "../../images/languageTogglerImage.svg";
import { ReactComponent as USFlag } from "../../images/united.svg";
import { ReactComponent as TurkeyFlag } from "../../images/turkey.svg";

import "./index.scss";

function LanguageMenu({ language, setLanguage }) {
  function changeLanguage(event) {
    const selectedLanguage = event.currentTarget.children[1].innerText;

    if (selectedLanguage === "Turkish") {
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
          <small>Languages</small>
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
          <span>English</span>
        </button>
        <button
          type="button"
          className={`d-flex align-items-center ${
            language === "TR" && "active-language"
          }`}
          onClick={(event) => changeLanguage(event)}
        >
          <TurkeyFlag />
          <span>Turkish</span>
        </button>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageMenu;
