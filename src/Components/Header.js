import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar
      style={{
        position: "fixed",
        top: "0",
        right: "0",
        left: "0",
        zIndex: "99",
      }}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand style={{ fontSize: "30px" }} href="/">
          <b> Fake Store </b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>About us</Nav.Link>
            <Nav.Link>Info</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown> */}
            <Nav.Link  href="/checkout" style={{ position: "absolute", right: "20%" }}>
              Checkout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
