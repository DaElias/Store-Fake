import React from "react";
import { Card, ListGroup, Alert } from "react-bootstrap";

const InformationEnvio = ({ buyer = {}, setValidar }) => {
  let arrayBuyer = Object.entries(buyer);
  if (arrayBuyer[0] === undefined) {
    //TODO hacer peticion al BackEnd para solicitar la direccion
    setValidar(false);
  } else {
    setValidar(true);
  }

  return (
    <div>
      {arrayBuyer[0] === undefined ? (
        <Alert variant="danger">
          <Alert.Heading>Verifique los datos del envio</Alert.Heading>
          <p>
            Parece que ocurrio un problema, por favor verificar los datos del
            envio!!
          </p>
        </Alert>
      ) : (
        <Card className="text-center ">
          <Card.Header>Informacion de contacto</Card.Header>
          <Card.Body>
            <Card.Title>Datos del envio</Card.Title>
            <ListGroup>
              {arrayBuyer.map((item, key) => (
                <ListGroup.Item key={key}>
                  <b>{item[0].toLocaleUpperCase()}: </b>
                  {item[1]}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default InformationEnvio;
