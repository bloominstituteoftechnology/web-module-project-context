import React, { useContext } from "react";
// Components
import Product from './Product';

import ProductContext from "./../contexts/ProductContext";

const Products = props => {
  const { products } = useContext(ProductContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Products;
