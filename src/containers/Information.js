import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
const Information = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="Information padding-top">
          <div className="Information-content">
            <div className="Information-head">
              <h2>Informacion de contacto</h2>
            </div>
            <div className="Information-from">
              <form action="">
                <input type="text" placeholder="Nombre completo" name="name" />
                <input
                  type="text"
                  placeholder="Correo electronico"
                  name="email"
                />
                <input type="text" placeholder="Direccion" name="address" />
                <input type="text" placeholder="Apto" name="apto" />
                <input type="text" placeholder="Ciudad" name="city" />
                <input type="text" placeholder="Pais" name="counrty" />
                <input type="text" placeholder="Estado" name="state" />
                <input type="text" placeholder="Codigo postal" name="cp" />
                <input type="text" placeholder="Telefono" name="phone" />
              </form>
            </div>
            <div className="Information-buttons">
              <div className="Information-back">
                <Link to="/checkout">Regresar</Link>
              </div>
              <div className="Information-next">
                <Link to="/checkout/payment">Pagar</Link>
              </div>
            </div>
          </div>
          <div className="Information-sidebar ">
            <h3>Pedido:</h3>
            <div className="Information-item">
              <div className="Information-element">
                <h4>
                  Item name <spam>10 $</spam>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Information;
