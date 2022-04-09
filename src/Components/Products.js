import React, { useContext } from "react";
import Product from "../Components/Product";
import AppContex from "../context/AppContex";

const Products = () => {
  const {
    state: { products },
    addToCard,
  } = useContext(AppContex);

  const handleAddToCart = (product) => {
    addToCard(product);
  };
  return (
    <div className="padding-top">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            handleAddToCart={handleAddToCart}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
