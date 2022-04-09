import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TablaProductos from "../Components/TablaProductos";
import AppContex from "../context/AppContex";
const Payment = () => {
  const { handleSumTotal } = useContext(AppContex);

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
                  <button className="btn-pagar" size="lg">
                    Pagar
                  </button>
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
