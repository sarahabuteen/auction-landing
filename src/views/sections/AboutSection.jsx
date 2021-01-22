import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutUs from "../../assets/images/about.png";

const AboutSection = () => (
  <>
    <section className="about-section" id="about">
      <Container>
        <Row>
          <Col md="6">
            <img src={AboutUs} alt="about us" />
          </Col>
          <Col md="6" className="d-flex flex-column justify-content-center">
            <h1 className="mb-4">About Auction</h1>
            <p className="lead mb-4">
              Auction is a new shopping service that relies on the bidding
              concept which allows the shops to showcase specific products of
              their choice and offer it for bidding.
            </p>
            <p className="mb-4">
              Customers can find the offers nearby their locations and submit
              bids which if won; they can place an order with their preferred
              payment and delivery options. So the product can be delivered to
              your doorstep by our drivers or you can even pick it up yourself!
            </p>
            <button className="btn gradient-btn text-uppercase w-50">
              Download app
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

export default AboutSection;
