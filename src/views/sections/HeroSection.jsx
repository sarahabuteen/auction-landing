import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Hero from "../../assets/images/hero.png";

const HeroSection = () => (
  <>
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md="7">
            <Row data-aos="fade-right">
              <Col md="12">
                <h1>Online food ordering app based on biddings</h1>
                <p>
                  After registration you can browse offers from different shops
                  with variant categories. Make your bid and place your order if
                  you are the lucky winner!
                </p>
              </Col>
            </Row>
            <Row data-aos="fade-up">
              <Col md="5">
                <button className="btn gradient-btn text-uppercase w-100">
                  Get the app now
                </button>
              </Col>
              <Col md="5">
                <button className="btn outline-btn text-uppercase w-100">
                  Register now
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

export default HeroSection;
