import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ContactUs from "../../assets/images/contact-us.svg";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <>
    <section className="contact-section" id="contactUs">
      <Container>
        <Row>
          <Col md="6">
            <img src={ContactUs} alt="contact us" />
          </Col>
          <Col md="6" className="d-flex flex-column justify-content-center">
            <Row>
              <Col md="12">
                <h1 className="mb-2">{t("contactUs.contactTitle")}</h1>
                <p className="mb-3">
                {t("contactUs.contactDescription")}
                </p>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Form>
                  <Form.Group>
                    <Form.Control type="text" placeholder={t("contactUs.fullName")} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="email" placeholder={t("contactUs.yourEmail")} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder={t("contactUs.writeMessage")}
                    />
                  </Form.Group>
                  <button className="btn gradient-btn text-uppercase w-100">
                  {t("contactUs.sendMessageBtn")}
                  </button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  </>

  )
}

export default ContactSection;
