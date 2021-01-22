import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AboutUs from "../../assets/images/about.png";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-section" id="about">
        <Container>
          <Row>
            <Col md="6">
              <img src={AboutUs} alt="about us" />
            </Col>
            <Col md="6" className="d-flex flex-column justify-content-center">
              <h1 className="mb-4">{t("about.aboutTitle")}</h1>
              <p className="lead mb-4">{t("about.descriptionI")}</p>
              <p className="mb-4">{t("about.descriptionII")}</p>
              <button className="btn gradient-btn text-uppercase w-50">
                {t("about.downloadBtn")}
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutSection;
