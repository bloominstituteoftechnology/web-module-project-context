import React, { useContext } from 'react';
import CartContext from './../contexts/CartContext'

// Components
import Item from './ShoppingCartItem';

function ShoppingCart () {
	const { cart, removeItem } = useContext(CartContext);
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item
					key={item.id}
					{...item}
					onRemoveItem={() => {
						console.log(item.id);
						removeItem(item.id);
					}}
				/>
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
