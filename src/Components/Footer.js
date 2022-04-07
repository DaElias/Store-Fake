import React from "react";
import { Navbar, Container } from "react-bootstrap";
const Footer = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ position: "absolute", buttom: "0", left: "0", right: "0" }}
    >
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
