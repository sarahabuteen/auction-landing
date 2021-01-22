import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeDelivery from "../../assets/images/delivery.svg";
import TakeAway from "../../assets/images/take-away.svg";
import OnlinePayment from "../../assets/images/payment.svg";
import CashOnDelivery from "../../assets/images/cash.svg";
import { useTranslation } from "react-i18next";

const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="features-section" id="features">
        <Container>
          <Row>
            <Col md="12">
              <h1 className="mb-4 text-center">
                {t("features.featuresTitle")}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md="3" xs="6">
              <div
                className="feature-box d-flex flex-column align-items-center justify-content-center text-center"
                data-aos="flip-up"
              >
                <div className="icon">
                  <img src={HomeDelivery} alt="home delivery" />
                </div>
                <h5 className="mb-2">{t("features.featureI")}</h5>
                <p className="mb-0">{t("features.featureIDesc")}</p>
              </div>
            </Col>
            <Col md="3" xs="6">
              <div
                className="feature-box d-flex flex-column align-items-center justify-content-center text-center"
                data-aos="flip-up"
              >
                <div className="icon">
                  <img src={TakeAway} alt="take away" />
                </div>
                <h5 className="mb-2">{t("features.featureII")}</h5>
                <p className="mb-0">{t("features.featureIIDesc")}</p>
              </div>
            </Col>
            <Col md="3" xs="6">
              <div
                className="feature-box d-flex flex-column align-items-center justify-content-center text-center"
                data-aos="flip-up"
              >
                <div className="icon">
                  <img src={OnlinePayment} alt="online payment" />
                </div>
                <h5 className="mb-2">{t("features.featureIII")}</h5>
                <p className="mb-0">{t("features.featureIIIDesc")}</p>
              </div>
            </Col>
            <Col md="3" xs="6">
              <div
                className="feature-box d-flex flex-column align-items-center justify-content-center text-center"
                data-aos="flip-up"
              >
                <div className="icon">
                  <img src={CashOnDelivery} alt="cash on delivery" />
                </div>
                <h5 className="mb-2">{t("features.featureIV")}</h5>
                <p className="mb-0">{t("features.featureIVDesc")}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FeaturesSection;
