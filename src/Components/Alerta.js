import React from "react";
import {  Modal } from "react-bootstrap";

const Alerta = ({title="", mensaje="",smShow,setSmShow}) => {
  return (
    <>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {title}
          </Modal.Title>
          {mensaje}
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
};

export default Alerta;
