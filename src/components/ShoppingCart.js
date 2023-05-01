import React,{useContext} from 'react';

// Components
import Item from './ShoppingCartItem';

import CartContext from '../contexts/CartContext';


const ShoppingCart = () => {
	const {cart,setCart} = useContext(CartContext);
	

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};
	const removeItem = item => {
		setCart(cart.filter(product => product.id !== item.id))
	}

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<CartContext.Provider value = {removeItem}>
					<Item key={item.id} {...item}/>
				</CartContext.Provider>
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
