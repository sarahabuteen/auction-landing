import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeDelivery from "../../assets/images/delivery.svg";
import TakeAway from "../../assets/images/take-away.svg";
import OnlinePayment from "../../assets/images/payment.svg";
import CashOnDelivery from "../../assets/images/cash.svg";

const FeaturesSection = () => (
  <>
    <section className="features-section" id="features">
      <Container>
        <Row>
          <Col md="12">
            <h1 className="mb-4 text-center">Our special features</h1>
          </Col>
        </Row>
        <Row>
          <Col md="3" xs="6">
            <div className="feature-box d-flex flex-column align-items-center justify-content-center text-center" data-aos="flip-up">
              <div className="icon">
                <img src={HomeDelivery} alt="home delivery" />
              </div>
              <h5 className="mb-2">Home Delivery</h5>
              <p className="mb-0">
                Receive your order at your doorstep, and track the driver all
                the way.
              </p>
            </div>
          </Col>
          <Col md="3" xs="6">
            <div className="feature-box d-flex flex-column align-items-center justify-content-center text-center" data-aos="flip-up">
              <div className="icon">
                <img src={TakeAway} alt="take away" />
              </div>
              <h5 className="mb-2">Take Away</h5>
              <p className="mb-0">
                You can choose to pick-up the order yourself if you're heading
                out!
              </p>
            </div>
          </Col>
          <Col md="3" xs="6">
            <div className="feature-box d-flex flex-column align-items-center justify-content-center text-center" data-aos="flip-up">
              <div className="icon">
                <img src={OnlinePayment} alt="online payment" />
              </div>
              <h5 className="mb-2">Online Payment</h5>
              <p className="mb-0">
                You can pay online for contact-less deliveries with no extra
                charges.
              </p>
            </div>
          </Col>
          <Col md="3" xs="6">
            <div className="feature-box d-flex flex-column align-items-center justify-content-center text-center" data-aos="flip-up">
              <div className="icon">
                <img src={CashOnDelivery} alt="cash on delivery" />
              </div>
              <h5 className="mb-2">Cash On Delivery</h5>
              <p className="mb-0">
                Pay for order when you receive it if you prefer the cash
                payments.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

export default FeaturesSection;
