import React from "react";
import { Row, Col, Container, Tabs, Tab, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const RegistrationSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="register-section" id="registration">
        <Container>
          <Row>
            <Col md="12">
              <h1 className="mb-4">{t("registration.registrationTitle")}</h1>
            </Col>
            <Col md="12">
              <Tabs defaultActiveKey="driver">
                <Tab eventKey="driver" title={t("registration.driverTab")}>
                  <Form className="row">
                    <Form.Group as={Col} md="3">
                      <Form.Label>{t("registration.firstName")}</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                      <Form.Label>{t("registration.lastName")}</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                      <Form.Label>{t("registration.email")}</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                      <Form.Label>
                        {t("registration.nationalIdNumber")}
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label>{t("registration.phoneNo")}</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Col md="12" className="d-flex justify-content-center">
                      <button className="btn gradient-btn text-uppercase w-25 mt-2">
                        {t("registration.submit")}
                      </button>
                    </Col>
                  </Form>
                </Tab>
                <Tab
                  eventKey="shopOwner"
                  title={t("registration.shopOwnerTab")}
                >
                  <Form className="row">
                    <Form.Group as={Col} md="3">
                      <Form.Label>{t("registration.firstName")}</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                      <Form.Label>{t("registration.lastName")}</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                      <Form.Label>{t("registration.email")}</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                      <Form.Label>
                        {t("registration.nationalIdNumber")}
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label>{t("registration.phoneNo")}</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Col md="12" className="d-flex justify-content-center">
                      <button className="btn gradient-btn text-uppercase w-25 mt-2">
                        {t("registration.submit")}
                      </button>
                    </Col>
                  </Form>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RegistrationSection;
