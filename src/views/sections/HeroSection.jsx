import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Hero from "../../assets/images/hero.png";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md="7">
              <Row data-aos="fade-right">
                <Col md="12">
                  <h1>{t("hero.heroTitle")}</h1>
                  <p>{t("hero.heroDesc")}</p>
                </Col>
              </Row>
              <Row data-aos="fade-up">
                <Col md="5">
                  <button className="btn gradient-btn text-uppercase w-100">
                    {t("hero.getAppBtn")}
                  </button>
                </Col>
                <Col md="5">
                  <button className="btn outline-btn text-uppercase w-100">
                    {t("hero.registerBtn")}
                  </button>
                </Col>
              </Row>
            </Col>
            <Col md="5">
              <Row>
                <Col md="12">
                  <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    <img src={Hero} alt="hero" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
