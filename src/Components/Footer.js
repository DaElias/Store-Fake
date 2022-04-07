import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const Footer = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          height: "50px",
        }}
      >
        <Navbar.Brand style={{ fontSize: "15px" }}>
          2022 © Fake Store Derechos no Reservados
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
