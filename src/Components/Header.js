import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartFlatbed} from "@fortawesome/free-solid-svg-icons"
import "../styles/components/Header.css";
const Header = () => {
  return (
    // <nav className="container-nav">
    //     <h1>Store Fake</h1>
    //     <ul className="container-nav container-ul">
    //       {/* <li><Link>Home</Link></li> */}
    //       <li>About</li>
    //       <li>Projects</li>
    //       <li>Contact</li>
    //     </ul>
    //   </nav>
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
          <b>
            {" "}
            <Link to="/" className="link-Style-rout">
              Fake Store
            </Link>{" "}
          </b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>About us</Nav.Link>
            <Nav.Link> Info</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown> */}
            <Nav.Link style={{ position: "absolute", right: "20%" }}></Nav.Link>
            <Nav.Link href="/checkout">
              <Link to="/checkout" className="link-Style-rout">
                Checkout
                <FontAwesomeIcon icon={faCartFlatbed} />
              </Link>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
