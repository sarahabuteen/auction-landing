import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CustomerFeatures from "../../assets/images/customer-features.png";
import CheckSquare from "../../assets/images/check-square.svg";

const CustomerSection = () => (
  <>
    <section className="customer-section">
      <Container>
        <Row>
          <Col md="5" className="d-flex flex-column justify-content-center">
            <h1 className="mb-4">Customer App Features</h1>
            <div className="features-list">
              <p className="d-flex">
                <img src={CheckSquare} alt="check" /> Largest shop list for
                customers to place a bid on their favourite food.
              </p>
              <p className="d-flex">
                <img src={CheckSquare} alt="check" /> Track their order.
              </p>
              <p className="d-flex">
                <img src={CheckSquare} alt="check" /> Easy payment methods.
              </p>
              <p className="d-flex">
                <img src={CheckSquare} alt="check" /> Home delivery, cash on
                delivery available.
              </p>
              <p className="d-flex">
                <img src={CheckSquare} alt="check" /> Opportunity to become a
                registered driver.
              </p>
              <p className="d-flex mb-0">
                <img src={CheckSquare} alt="check" /> 24/7 customer support.
              </p>
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

export default CustomerSection;
