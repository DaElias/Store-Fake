import React, { useContext } from "react";
import AppContex from "../context/AppContex";
import { Col, Row, ListGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../styles/components/Checkout.css";

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContex);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (acumulador, currentValue) =>
      acumulador + currentValue.price;
    return cart.reduce(reducer, 0);
  };
  return (
    <>
      <Header />
      <Container>
        <Row className="Checkout-conteiner">
          <Col>
            <h2>Lista de Pedidos</h2>
            <ListGroup>
              {cart.length > 0 ? (
                cart.map((item, index) => {
                  return (
                    <ListGroup.Item key={index}>
                      {item.title}
                      <span className="Checkout-list-preice">
                        <b> ${item.price} </b>
                        <button
                          className="btnEliminar"
                          onClick={() => handleRemove(item)}
                        >
                          {/* <span> Eliminar </span> */}
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </span>
                    </ListGroup.Item>
                  );
                })
              ) : (
                <h3>No hay elementos en el carrito... 🥲 </h3>
              )}
            </ListGroup>
          </Col>
          <Col>
            <h2>
              Total a Pagar: $ <b> {`${handleSumTotal()}`}</b>
            </h2>
            {handleSumTotal() > 0 && (
              <Link to="/checkout/information">
                <button
                  className="btnEliminar grande"
                  // className="btn-pagar"
                >
                  Continuar Pedido
                </button>
              </Link>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;
