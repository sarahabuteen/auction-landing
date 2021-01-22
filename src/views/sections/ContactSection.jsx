import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import ContactUs from "../../assets/images/contact-us.svg";

const ContactSection = () => (
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
                <h1 className="mb-2">Contact Us</h1>
                <p className="mb-3">
                  Do you feel like contacting us or want to become a driver of
                  Auction? You can send us a message and we’ll getback to you as
                  soon as Possible!
                </p>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Form>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Full Name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write Your Message..."
                    />
                  </Form.Group>
                  <button className="btn gradient-btn text-uppercase w-100">
                    Send your message
                  </button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

export default ContactSection;
