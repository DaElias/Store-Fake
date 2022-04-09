import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import AppContex from "../context/AppContex";
const TablaProductos = () => {
  const {
    state: { cart },
    handleSumTotal,
  } = useContext(AppContex);

  return (
    <>
      <div className="Information-sidebar ">
        <h3>Resumen del pedido:</h3>
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
                  <td>{key+1}</td>
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
                  <b style={{ color: "white" }}> $ {handleSumTotal()} </b>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default TablaProductos;
