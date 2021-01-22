import React from "react";
import { Row, Col, Container, Tabs, Tab, Form } from "react-bootstrap";

const RegistrationSection = () => (
  <>
    <section className="register-section" id="registration">
      <Container>
        <Row>
          <Col md="12">
            <h1 className="mb-4">Register Now as Driver or Shop Owner</h1>
          </Col>
          <Col md="12">
            <Tabs defaultActiveKey="driver">
              <Tab eventKey="driver" title="Register as Driver">
                <Form className="row">
                  <Form.Group as={Col} md="3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                    <Form.Label>National ID Number</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Col md="12" className="d-flex justify-content-center">
                    <button className="btn gradient-btn text-uppercase w-25 mt-2">
                      Submit
                    </button>
                  </Col>
                </Form>
              </Tab>
              <Tab eventKey="shopOwner" title="Register as Shop Owner">
                <Form className="row">
                  <Form.Group as={Col} md="3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                    <Form.Label>National ID Number</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Col md="12" className="d-flex justify-content-center">
                    <button className="btn gradient-btn text-uppercase w-25 mt-2">
                      Submit
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

export default RegistrationSection;
