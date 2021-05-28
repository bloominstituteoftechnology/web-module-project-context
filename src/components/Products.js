import React, { useContext } from 'react';

// Components
import Product from './Product';
import ProductContext from '../contexts/ProductContext'


const Products = () => {

	const productList = useContext(ProductContext)
	return (
		<div className="products-container">
			{productList.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={productList.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
