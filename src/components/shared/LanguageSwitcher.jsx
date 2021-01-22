import React from "react";
import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <>
      {i18n.language === "ar" ? (
        <Nav.Link onClick={() => i18n.changeLanguage("en")}>
          <FiGlobe className="negative-margin" /> <span>العربية</span>
        </Nav.Link>
      ) : (
        <Nav.Link onClick={() => i18n.changeLanguage("ar")}>
          <FiGlobe className="negative-margin" /> <span>English</span>
        </Nav.Link>
      )}
    </>
  );
}

export default LanguageSwitcher;
