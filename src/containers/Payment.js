import React, { useContext, useState } from "react";
import PaypalPay from "../Components/PaypalPay";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TablaProductos from "../Components/TablaProductos";
import AppContex from "../context/AppContex";
import InformationEnvio from "../Components/InformationEnvio";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
const Payment = () => {
  const {
    handleSumTotal,
    state: { buyer, cart },
    newOrder,
  } = useContext(AppContex);
  const [validar, setValidar] = useState(false);
  const nivegate = useNavigate();
  const paymentHandleSuccess = (data) => {
    if (data.status === "COMPLETED") {
      const nuevaOrden = {
        buyer,
        products: cart,
        payment: data,
      };
      newOrder(nuevaOrden);
      setTimeout(() => nivegate("/checkout/success"), 5000);
    }
  };
  return (
    <>
      <Helmet>
        <title>FS - payment</title>
      </Helmet>
      <Header />
      <Container className="padding-bottom">
        <div className="Payment padding-top">
          <div className="Payment-content">
            <Row>
              <Col>
                <TablaProductos />
              </Col>
              <Col>
                <InformationEnvio buyer={buyer} setValidar={setValidar} />
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {handleSumTotal() > 1 && validar ? (
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
