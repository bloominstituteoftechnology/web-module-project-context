import React from 'react';
import ProductContext from './../contexts/ProductContext';
import CartContext from './../contexts/CartContext';

// Components
import Product from './Product';

const Products = () => {
	const product = useContext(ProductContext);

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
