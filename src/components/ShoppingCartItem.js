import React, {useContext} from "react";

import CartContext from './../contexts/CartContext'

const Item = (props) => {
	const { removeItem } = useContext(CartContext)
	console.log('props from item',props)
	const handleClick = () =>{
		removeItem(props.id)
		console.log(props.id)
	}
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={handleClick}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
