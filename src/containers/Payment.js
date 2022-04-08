import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Payment = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="Payment padding-top">
          <div className="Payment-content">
            <h3>Resumen del pedido: </h3>
            <div className="Payment-button">Boton de pago con paypal</div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Payment;
