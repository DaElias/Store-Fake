import React from "react";
import { Col, Row, ListGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../styles/components/Checkout.css";

const Checkout = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="Checkout-conteiner">
          <Col>
            <h2>Lista de Pedidos</h2>
            <ListGroup>
              <ListGroup.Item>
                Name Item
                <span className="Checkout-list-preice">
                  <b> 10$ </b>
                  <button className="btnEliminar">
                    {/* <span> Eliminar </span> */}
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <h2>
              Total a Pagar: <b> 10$</b>
            </h2>
            <Link to="/checkout/information">
              <button
                className="btnEliminar grande"
                // className="btn-pagar"
              >
                Continuar Pedido
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;
