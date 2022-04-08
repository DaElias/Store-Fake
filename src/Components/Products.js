import React from "react";
import Product from "../Components/Product";

const Products = ({ products }) => {
  return (
    <div className="padding-top">
      <div className="Products-items">
        {products.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
