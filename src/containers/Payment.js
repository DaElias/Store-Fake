import React, { useContext, useState } from "react";
import PaypalPay from "../Components/PaypalPay";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TablaProductos from "../Components/TablaProductos";
import AppContex from "../context/AppContex";
import Alerta from "../Components/Alerta";
const Payment = () => {
  const {
    handleSumTotal,
    state: { buyer, cart },
    newOrder,
  } = useContext(AppContex);
  

  const paymentHandleSuccess = (data) => {
    if (data.status === "COMPLETED") {
      const nuevaOrden = {
        buyer,
        products: cart,
        payment: data,
      };
      newOrder(nuevaOrden);
    }
  };
  return (
    <>
      <Header />
      <Container className="padding-bottom">
        <div className="Payment padding-top">
          <div className="Payment-content">
            <Row>
              <Col>
                <TablaProductos />
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {handleSumTotal() > 1 ? (
                  <>
                    <PaypalPay
                      paymentHandleSuccess={paymentHandleSuccess}
                      handleSumTotal={handleSumTotal}
                    />

                    
                  </>
                ) : (
                  <button className="btn-pagar" size="lg" disabled>
                    Pagar
                  </button>
                )}
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Payment;
