import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Download from "../../assets/images/download.png";
import AppStore from "../../assets/images/app-store.png";
import GooglePlay from "../../assets/images/google-play.png";
import { useTranslation } from "react-i18next";

const DownloadSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="download-section">
        <Container>
          <Row>
            <Col md="6" className="d-flex flex-column justify-content-center">
              <Row>
                <Col md="12">
                  <h1 className="mb-4 text-white">
                    {t("download.downnloadTitle")}
                  </h1>
                  <p className="text-white mb-4">{t("download.description")}</p>
                </Col>
              </Row>
              <Row>
                <Col md="5">
                  <img src={AppStore} alt="app store" className="store-btn" />
                </Col>
                <Col md="5">
                  <img
                    src={GooglePlay}
                    alt="google play"
                    className="store-btn"
                  />
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <img src={Download} alt="download" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DownloadSection;
