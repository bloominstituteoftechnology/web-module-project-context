import React from "react";
import { useContext } from "react";
// Components
import Product from "./Product";
import ProductContext from "../context/ProductContext";

const { products, addItem } = useContext(ProductContext);

const Products = () => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
