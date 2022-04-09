import React from "react";
import { Card, Button } from "react-bootstrap";
const Product = ({ product, handleAddToCart }) => {
  return (
    <Card className="container-product">
      <Card.Img src={product.image} className="img-product" />
      <Card.Body>
        <Card.Title>
          {product.title}
          <span> {product.price}$</span>
        </Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button
          className="btn-comprar"
          variant="primary"
          onClick={() => handleAddToCart(product)}
        >
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
