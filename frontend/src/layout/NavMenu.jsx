import React from "react";
import NavButtons from "../components/NavButtons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Nav.css"

const NavMenu = () => {
  return (
<Navbar expand="lg" className="bg-body-tertiary nav" style={{ position: 'fixed' }}>
      <Container>
        <Navbar.Brand className="logo-text" style={{ color: "white"}}>ATuFit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-items" style={{textDecoration: "none"}}>
            <NavButtons source="home-page" linkName="Start" />
            <NavButtons source="calculator-BMR" linkName="Calculator" />
            <NavButtons source="counter" linkName="Calories counter" />{" "}
            <NavButtons source="add-product" linkName="Add product" />
            <NavButtons source="daily-results" linkName="Daily results" />
            <NavButtons source="contact" linkName="Contact" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
