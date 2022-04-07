import React from "react";
import { Col, Row, ListGroup } from "react-bootstrap";
import "./style/Checkout.css";

const Checkout = () => {
  return (
    <Row className="Checkout-conteiner">
      <Col>
        <h2>Lista de Pedidos</h2>
        <ListGroup>
          <ListGroup.Item>
            Name Item
            <span className="Checkout-list-preice">
              <b> 10$ </b>
              <button className="btnEliminar">
                <span className="front text"> Eliminar</span>
              </button>
            </span>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
        <h2>
          Total a Pagar: <b> 10$</b>
        </h2>
        <button
          className="btnEliminar grande"
          // className="btn-pagar"
        >
          Pagar
        </button>
      </Col>
    </Row>
  );
};

export default Checkout;
