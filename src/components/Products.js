import React from 'react';
import ProductContext from '../contexts/ProductContext';
import { useContext } from 'react';

// Components
import Product from './Product';

const Products = () => {
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
