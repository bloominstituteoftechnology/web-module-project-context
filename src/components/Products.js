import React, { useContext } from 'react';
import {ProductContext} from "../context/ProductContext"
// Components
import Product from './Product';

const Products = () => {
	const { products, addItem } = useContext(ProductContext)
	return (
		<div className="products-container">
			<ProductContext.Consumer>
			{() =>(<>
				{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
			</>
			)}
			</ProductContext.Consumer>
		</div>
	);
};

export default Products;