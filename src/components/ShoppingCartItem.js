import React from 'react';

function Item ({ image, title, price, onRemoveItem }) {
	return (
		<div className="shopping-cart_item">
			<img src={image} alt={`${title} book`} />


			<div>
				<h1>{title}</h1>
				<p>$ {price}</p>
				<button onClick={onRemoveItem}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
