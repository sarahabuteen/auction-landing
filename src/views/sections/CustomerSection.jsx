import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CustomerFeatures from "../../assets/images/customer-features.png";
import CheckSquare from "../../assets/images/check-square.svg";
import { useTranslation } from "react-i18next";

const CustomerSection = () => {
  const { t } = useTranslation();
  const customerFeatures = t("customerFeatures.features", { returnObjects: true });

  return (
    <>
      <section className="customer-section">
        <Container>
          <Row>
            <Col md="5" className="d-flex flex-column justify-content-center">
              <h1 className="mb-4">{t("customerFeatures.customerTitle")}</h1>
              <div className="features-list">
                {customerFeatures.map((feature, index) => (
                  <p key={index} className="d-flex">
                    <img src={CheckSquare} alt="check" />
                    {t(feature)}
                  </p>
                ))}
              </div>
            </Col>
            <Col md="7">
              <img src={CustomerFeatures} alt="customer features" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CustomerSection;
