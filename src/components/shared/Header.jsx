import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <Scrollspy
        items={["about", "features", "registration", "contactUs"]}
        currentClassName="is-current"
        style={{ padding: 0 }}
        scrolledPastClassName="passed-by"
      >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img src={Logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <AnchorLink className="nav-link" href="#about">
                  {t("shared.about")}
                </AnchorLink>
                <AnchorLink className="nav-link" href="#features">
                  {t("shared.features")}
                </AnchorLink>
                <AnchorLink className="nav-link" href="#registration">
                  {t("shared.registration")}
                </AnchorLink>
                <AnchorLink className="nav-link" href="#contactUs">
                  {t("shared.contactUs")}
                </AnchorLink>
                <LanguageSwitcher />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Scrollspy>
    </>
  );
};

export default Header;
