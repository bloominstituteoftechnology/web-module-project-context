import React, { useContext } from 'react';

import  {ProductContext} from '../App'

// Components
import Product from './Product';

const Products = () => {

const products = useContext(ProductContext);

	console.log("this is Producsts ", products);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					// addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
