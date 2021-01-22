import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => (
  <>
    <Scrollspy
      items={["about", "features", "registration", "contactUs"]}
      currentClassName="is-current"
      style={{ padding: 0 }}
      scrolledPastClassName="passed-by"
    >
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <AnchorLink className="nav-link" href="#about">
                About
              </AnchorLink>
              <AnchorLink className="nav-link" href="#features">
                Features
              </AnchorLink>
              <AnchorLink className="nav-link" href="#registration">
                Registration
              </AnchorLink>
              <AnchorLink className="nav-link" href="#contactUs">
                Contact Us
              </AnchorLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Scrollspy>
  </>
);

export default Header;
