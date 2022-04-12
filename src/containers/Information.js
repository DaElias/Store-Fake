import React, { useRef, useContext, useEffect } from "react";
import AppContex from "../context/AppContex";
import { Helmet } from "react-helmet";
import { Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TablaProductos from "../Components/TablaProductos"
const initialState = {
  name: "",
  email: "",
  address: "",
  apto: "",
  city: "",
  counrty: "",
  statee: "",
  cp: "",
  phone: "",
};

const formularioReducer = (state, acction) => {
  switch (acction.type) {
    case "LOCALSTORAGE_UPDATE":
      return acction.payload; //* cambia todo el estado!!
    case "name":
      return {
        ...state,
        name: acction.payload,
      };
    case "email":
      return {
        ...state,
        email: acction.payload,
      };
    case "address":
      return {
        ...state,
        address: acction.payload,
      };
    case "apto":
      return {
        ...state,
        apto: acction.payload,
      };
    case "city":
      return {
        ...state,
        city: acction.payload,
      };
    case "counrty":
      return {
        ...state,
        counrty: acction.payload,
      };
    case "state":
      return {
        ...state,
        state: acction.payload,
      };
    case "cp":
      return {
        ...state,
        cp: acction.payload,
      };
    case "phone":
      return {
        ...state,
        phone: acction.payload,
      };
    default:
      return state;
  }
};

const Information = () => {
  const {
    handleSumTotal,
    addToBuyer,
  } = useContext(AppContex);
  const form = useRef(null);
  const navigate = useNavigate(); // redirecciones desde js
  const [state, dispatch] = React.useReducer(formularioReducer, initialState);
  const handleFormUpdate = (event) => {
    dispatch({ type: event.target.name, payload: event.target.value });
  };

  useEffect(() => {
    // console.log("Inicio el useEffect");
    if (localStorage.getItem("buyed")) {
      // console.log("El elemento existe!!");
      const elemento = JSON.parse(localStorage.getItem("buyed"));
      // console.log(elemento);
      dispatch({ type: "LOCALSTORAGE_UPDATE", payload: elemento });
    }
  }, []);

  const handleSubmit = (e) => {
    const formData = new FormData(form.current);
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
    addToBuyer(buyed);
    localStorage.setItem("buyed", JSON.stringify(buyed));
    navigate("/checkout/payment"); //redirecciona cuando el pago este listo!!
  };

  return (
    <>
     <Helmet>
        <title>Fs - information</title>
      </Helmet>
      <Header />
      <Container>
        <div className="Information padding-top padding-bottom">
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
                  value={state.name}
                  onChange={handleFormUpdate}
                />
                <input
                  type="email"
                  placeholder="Correo"
                  name="email"
                  required
                  value={state.email}
                  onChange={handleFormUpdate}
                />
                <input
                  type="text"
                  placeholder="Direccion"
                  name="address"
                  required
                  value={state.address}
                  onChange={handleFormUpdate}
                />

                <input
                  type="text"
                  placeholder="Apto"
                  name="apto"
                  required
                  value={state.apto}
                  onChange={handleFormUpdate}
                />

                <input
                  type="text"
                  placeholder="Ciudad"
                  name="city"
                  required
                  value={state.city}
                  onChange={handleFormUpdate}
                />

                <input
                  type="text"
                  placeholder="Pais"
                  name="counrty"
                  required
                  value={state.counrty}
                  onChange={handleFormUpdate}
                />

                <input
                  type="text"
                  placeholder="Estado"
                  name="state"
                  required
                  value={state.state}
                  onChange={handleFormUpdate}
                />
                <input
                  type="number"
                  placeholder="Codigo postal"
                  name="cp"
                  required
                  value={state.cp}
                  onChange={handleFormUpdate}
                />
                <input
                  type="number"
                  placeholder="Telefono"
                  name="phone"
                  required
                  value={state.phone}
                  onChange={handleFormUpdate}
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
          <TablaProductos />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Information;
