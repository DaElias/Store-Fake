import React, { useContext, useState } from "react";
import AppContex from "../context/AppContex";
import { Col, Row, ListGroup, Container, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../styles/components/Checkout.css";

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
    handleSumTotal,
  } = useContext(AppContex);
  const [show, setShow] = useState(false);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  //** Valida si los elementos del carrito estan repetidos */
  const handlePintar = () => {
    const registro = [];
    const salida = [];
    cart.forEach((item) => {
      if (!registro.includes(item)) {
        registro.push(item);
        salida.push({ ...item, amount: 1 });
      } else {
        salida.forEach((item2, key) => {
          if (item.id === item2.id) {
            salida[key].amount += 1;
          }
        });
      }
    });
    return salida;
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
                handlePintar().map((item, index) => {
                  return (
                    <ListGroup.Item key={index}>
                      {item.title} {item.amount > 1 && " x " + item.amount}
                      <span className="Checkout-list-preice">
                        <b> ${item.price * parseInt(item.amount)}</b>
                        <button
                          className="btnEliminar"
                          onClick={() => handleRemove(item)}
                        >
                          {/* <span> Eliminar </span> */}
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        {item.amount > 1 && (
                          <>
                            <button className="btnEliminar">
                              <FontAwesomeIcon
                                icon={faPen}
                                onClick={() => setShow(true)}
                              />
                            </button>
                            <Modal show={show} onHide={() => setShow(false)}>
                              <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                Woohoo, you're reading this text in a modal!
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={() => setShow(false)}
                                >
                                  Close
                                </Button>
                                <Button
                                  variant="primary"
                                  onClick={() => setShow(false)}
                                >
                                  Save Changes
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </>
                        )}
                      </span>
                    </ListGroup.Item>
                  );
                })
              ) : (
                <>
                  <h3>No hay elementos en el carrito... 🥲 </h3>
                </>
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
