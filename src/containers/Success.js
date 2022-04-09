import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../styles/components/Success.css";

const Success = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="Success padding-top" style={{ height: "500px" }}>
          <div className="Success-content">
            <h2>Juan, gracias por tu compra!!</h2>
            <p>Tu pedido llegara en 4 dias</p>
            <div className="Success-map">Google maps</div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Success;
