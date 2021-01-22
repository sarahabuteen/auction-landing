import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import DriverFeatures from "../../assets/images/driver-features.png";
import CheckSquare from "../../assets/images/check-square.svg";
import { useTranslation } from "react-i18next";

const DriverSection = () => {
  const { t } = useTranslation();
  const driverFeatures = t("driverFeatures.features", { returnObjects: true });

  return (
    <>
      <section className="driver-section">
        <Container>
          <Row>
            <Col md="7">
              <img src={DriverFeatures} alt="driver features" />
            </Col>
            <Col md="5" className="d-flex flex-column justify-content-center">
              <h1 className="mb-4">{t("driverFeatures.driverTitle")}</h1>
              <div className="features-list">
                {driverFeatures.map((feature, index) => (
                  <p key={index} className="d-flex">
                    <img src={CheckSquare} alt="check" />
                    {t(feature)}
                  </p>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DriverSection;
