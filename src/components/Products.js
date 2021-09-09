import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import React from 'react';

const Product = () => {
	//In the component, call the `useContext` hook and pass in the context object we want to use into it.
	const {product, addItem} = useContext(ProductContext)
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
