import React from 'react';
import ProductContext from './../contexts/ProductContext';
import CartContext from './../contexts/CartContext';

const Product =() => {
	const product = useContext(ProductContext);

	return (
		<div className="product">
			<img src={product.image} alt={`${product.title} book`} />

			<h1 className="title">{product.title}</h1>

			<p className="price">${product.price}</p>

			<button onClick={() => addItem(product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
