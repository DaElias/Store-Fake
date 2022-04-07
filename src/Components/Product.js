import React from "react";
import { Card, Button } from "react-bootstrap";
const Product = ({ product }) => {
  return (
    <Card className="container-product">
      <Card.Img src={product.image} />
      <Card.Body>
        <Card.Title>
          {product.title}
          <span> {product.price}$</span>
        </Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button className="btn-comprar" variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
