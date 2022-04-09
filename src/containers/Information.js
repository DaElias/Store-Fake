import React, { useRef, useContext } from "react";
import AppContex from "../context/AppContex";
import { Button, Container, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Information = () => {
  const {
    state: { cart },
    handleSumTotal,
    addToBuyer,
  } = useContext(AppContex);
  const form = useRef(null);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    const formData = new FormData(form.current);
    const buyed = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      apto: formData.get("apto"),
      city: formData.get("city"),
      counrty: formData.get("counrty"),
      state: formData.get("state"),
      cp: formData.get("cp"),
      phone: formData.get("phone"),
    };
    if (
      formData.get("name") === "" ||
      formData.get("email") === "" ||
      formData.get("address") === "" ||
      formData.get("apto") === "" ||
      formData.get("city") === "" ||
      formData.get("counrty") === "" ||
      formData.get("state") === "" ||
      formData.get("cp") === "" ||
      formData.get("phone") === ""
    )
      return alert("Asegurese de llenar los datos!!");
    addToBuyer(buyed);
    navigate("/checkout/success"); //redirecciona cuando el pago este listo!!
  };

  return (
    <>
      <Header />
      <Container>
        <div className="Information padding-top">
          <div className="Information-content">
            <div className="Information-head">
              <h2>Informacion de contacto</h2>
            </div>
            <div className="Information-form">
              <form
                // onChange={handleSubmit}
                onSubmit={handleSubmit}
                ref={form}
              >
                <input
                  type="text"
                  placeholder="Nombre completo"
                  name="name"
                  required
                />
                <input type="text" placeholder="Correo" name="email" required />
                <input
                  type="text"
                  placeholder="Direccion"
                  name="address"
                  required
                />
                <input type="text" placeholder="Apto" name="apto" required />
                <input type="text" placeholder="Ciudad" name="city" required />
                <input type="text" placeholder="Pais" name="counrty" required />
                <input type="text" placeholder="Estado" name="state" required />
                <input
                  type="text"
                  placeholder="Codigo postal"
                  name="cp"
                  required
                />
                <input
                  type="text"
                  placeholder="Telefono"
                  name="phone"
                  required
                />
                {/* <div className="Information-buttons"> */}
                <div className="Information-back">
                  <Link to="/checkout">Regresar</Link>
                </div>
                {/* <div className="Information-next"> */}
                {handleSumTotal() > 0 ? (
                  <button type="submit">
                    {/* <Link to="/checkout/payment"> */}
                    Pagar
                    {/* </Link> */}
                  </button>
                ) : (
                  <Button disabled type="submit">
                    Pagar
                  </Button>
                )}
                {/* </div> */}
                {/* </div> */}
              </form>
            </div>
          </div>
          <div className="Information-sidebar ">
            <h3>Pedido:</h3>
            <div className="Information-item">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Producto</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, key) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                  <tr style={{ backgroundColor: "gray" }}>
                    <td> </td>
                    <td>
                      <b style={{ color: "white" }}>Total: </b>
                    </td>
                    <td>
                      <b style={{ color: "white" }}> {handleSumTotal()}</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Information;
