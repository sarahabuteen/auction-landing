import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ColoredLogo from "../../assets/images/colored-logo.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col md="2">
              <img src={ColoredLogo} alt="logo" />
            </Col>
            <Col
              md="8"
              className="d-flex align-items-center justify-content-center"
            >
              <ul className="links-list list-unstlyed list-inline mb-0">
                <li className="list-inline-item">
                  <AnchorLink href="#about"> {t("shared.about")}</AnchorLink>
                </li>
                <li className="list-inline-item">
                  <AnchorLink href="#features">
                    {" "}
                    {t("shared.features")}
                  </AnchorLink>
                </li>
                <li className="list-inline-item">
                  <AnchorLink href="#registration">
                    {" "}
                    {t("shared.registration")}
                  </AnchorLink>
                </li>
                <li className="list-inline-item">
                  <AnchorLink href="#contactUs">
                    {" "}
                    {t("shared.contactUs")}
                  </AnchorLink>
                </li>
              </ul>
            </Col>
            <Col
              md="2"
              className="d-flex align-items-center justify-content-end"
            >
              <ul className="social-links list-unstlyed list-inline mb-0">
                <li className="list-inline-item">
                  <FaFacebookF />
                </li>
                <li className="list-inline-item">
                  <FaInstagram />
                </li>
                <li className="list-inline-item">
                  <FaTwitter />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <section className="copyright">
        <Container>
          <Row>
            <Col md="12">
              <p className="mb-0 text-white text-center">
                Copyright &copy; Auction {new Date().getFullYear()}. All Rights
                Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
