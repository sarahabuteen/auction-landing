import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import DriverFeatures from "../../assets/images/driver-features.png";
import CheckSquare from "../../assets/images/check-square.svg";

const DriverSection = () => (
  <>
    <section className="driver-section">
      <Container>
        <Row>
          <Col md="7">
            <img src={DriverFeatures} alt="driver features" />
          </Col>
          <Col md="5" className="d-flex flex-column justify-content-center">
            <h1 className="mb-4">Driver App Features</h1>
            <div className="features-list">
              <p className="d-flex">
                <img src={CheckSquare} alt="check" /> Driver has the ability to
                approve or reject any order from his orders list.
              </p>
              <p className="d-flex">
                <img src={CheckSquare} alt="check" /> Able to view order
                details.
              </p>
              <p className="d-flex">
                <img src={CheckSquare} alt="check" /> At a time he'll get one
                order to deliver.
              </p>
              <p className="d-flex">
                <img src={CheckSquare} alt="check" /> Able to receive
                notifications for orders related events.
              </p>
              <p className="d-flex">
                <img src={CheckSquare} alt="check" /> Driver can report a
                problem.
              </p>
              <p className="d-flex mb-0">
                <img src={CheckSquare} alt="check" /> Able to see his Total
                transaction history.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

export default DriverSection;
