import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Row,
  Col,
  Form,
  Tabs,
  Tab,
} from "react-bootstrap";
import Logo from "./assets/images/logo.png";
import Hero from "./assets/images/hero.png";
import HomeDelivery from "./assets/images/delivery.svg";
import TakeAway from "./assets/images/take-away.svg";
import OnlinePayment from "./assets/images/payment.svg";
import CashOnDelivery from "./assets/images/cash.svg";
import AboutUs from "./assets/images/about.png";
import CustomerFeatures from "./assets/images/customer-features.png";
import CheckSquare from "./assets/images/check-square.svg";
import DriverFeatures from "./assets/images/driver-features.png";
import Download from "./assets/images/download.png";
import AppStore from "./assets/images/app-store.png";
import GooglePlay from "./assets/images/google-play.png";
import ContactUs from "./assets/images/contact-us.svg";
import ColoredLogo from "./assets/images/colored-logo.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const App = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/">Features</Nav.Link>
              <Nav.Link href="/">Registration</Nav.Link>
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md="7">
              <Row>
                <Col md="12">
                  <h1>Online food ordering app based on biddings</h1>
                  <p>
                    After registration you can browse offers from different
                    shops with variant categories. Make your bid and place your
                    order if you are the lucky winner!
                  </p>
                </Col>
              </Row>
              <Row>
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
                  <img src={Hero} alt="hero" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="features-section">
        <Container>
          <Row>
            <Col md="12">
              <h1 className="mb-4 text-center">Our special features</h1>
            </Col>
          </Row>
          <Row>
            <Col md="3" xs="6">
              <div className="feature-box d-flex flex-column align-items-center justify-content-center text-center">
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
              <div className="feature-box d-flex flex-column align-items-center justify-content-center text-center">
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
              <div className="feature-box d-flex flex-column align-items-center justify-content-center text-center">
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
              <div className="feature-box d-flex flex-column align-items-center justify-content-center text-center">
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
      <section className="about-section">
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
                your doorstep by our drivers or you can even pick it up
                yourself!
              </p>
              <button className="btn gradient-btn text-uppercase w-50">
                Download app
              </button>
            </Col>
          </Row>
        </Container>
      </section>
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
                  <img src={CheckSquare} alt="check" /> Driver has the ability
                  to approve or reject any order from his orders list.
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
      <section className="register-section">
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
                      <button className="btn gradient-btn text-uppercase w-25 mt-2">Submit</button>
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
                        <button className="btn gradient-btn text-uppercase w-25 mt-2">Submit</button>
                      </Col>
                    </Form>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="download-section">
        <Container>
          <Row>
            <Col md="6" className="d-flex flex-column justify-content-center">
              <Row>
                <Col md="12">
                  <h1 className="mb-4 text-white">Download our Auction app</h1>
                  <p className="text-white mb-4">
                    View recent offers and submit bids over them, place your
                    order and track it until delivered to your doorstep.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md="5">
                  <img src={AppStore} alt="app store" className="store-btn" />
                </Col>
                <Col md="5">
                  <img src={GooglePlay} alt="google play" className="store-btn" />
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <img src={Download} alt="download" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contact-section">
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
                    Auction? You can send us a message and we’ll getback to you
                    as soon as Possible!
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
      <footer>
        <Container>
          <Row>
            <Col md="2">
              <img src={ColoredLogo} alt="logo" />
            </Col>
            <Col
              md="8"
              className="d-flex align-items-center justify-content-center"
            >
              <ul className="links-list list-unstlyed list-inline mb-0">
                <li className="list-inline-item">About</li>
                <li className="list-inline-item">Features</li>
                <li className="list-inline-item">Registration</li>
                <li className="list-inline-item">Contact</li>
              </ul>
            </Col>
            <Col
              md="2"
              className="d-flex align-items-center justify-content-end"
            >
              <ul className="social-links list-unstlyed list-inline mb-0">
                <li className="list-inline-item">
                  <FaFacebookF />
                </li>
                <li className="list-inline-item">
                  <FaInstagram />
                </li>
                <li className="list-inline-item">
                  <FaTwitter />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <section className="copyright">
        <Container>
          <Row>
            <Col md="12">
              <p className="mb-0 text-white text-center">
                Copyright &copy; Auction {(new Date().getFullYear())}. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default App;
