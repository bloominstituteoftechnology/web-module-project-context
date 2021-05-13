import React from 'react';
import ProductContext from './../contexts/ProductContext';
import CartContext from './../contexts/CartContext';

const Item = () => {
	const product = useContext(ProductContext);

	return (
		<div className="shopping-cart_item">
			<img src={image} alt={`${title} book`} />


			<div>
				<h1>{title}</h1>
				<p>$ {price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
