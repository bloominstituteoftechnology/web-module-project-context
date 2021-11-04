import React, { useContext } from 'react';
import ProductContext from './../contexts/ProductContext'

import Product from './Product';

const Products = props => {
	const { products, addItem } = useContext(ProductContext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
