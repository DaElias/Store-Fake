import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../styles/components/Success.css";

const Success = () => {
  return (
    <>
      <Header />
      <div className="Success padding-top">
        <div className="Success-content">
          <h2>Juan, gracias por tu compra!!</h2>
          <spam>Tu pedido llegara en 4 dias</spam>
          <div className="Success-map">
            Google maps
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
