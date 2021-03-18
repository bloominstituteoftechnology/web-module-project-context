import React, {useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = () => {
	const products = useContext(ProductContext)
	const addItem = useContext(ProductContext)

	console.log("Products:",products)
	return (
		<div className="products-container">
			{products.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
