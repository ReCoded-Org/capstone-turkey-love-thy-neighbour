import React from "react";

import { Dropdown } from "react-bootstrap";

import { ReactComponent as LanguageTogglerImage } from "../../images/languageTogglerImage.svg";

import "./index.scss";

function LanguageMenu({ language, setLanguage }) {
  // onClick={() => {
  //   if (language === "TR") {
  //     setLanguage("EN");
  //     return;
  //   }
  //   setLanguage("TR");
  // }}

  return (
    <Dropdown className="language-menu">
      <Dropdown.Toggle>
        <LanguageTogglerImage className="language-toggler-icon" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageMenu;
