import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data); //one state property
	const [cart, setCart] = useState([]); //two state property

	const addItem = item => {
		// add the given item to the cart
		const updateCart = [...cart, item]
		setCart(updateCart);
		console.log("Added things to cart", updateCart);
	};

	function removeItem (itemToRemoveId) {
		setCart([...cart.filter(cartItem => 
			cartItem.id !== itemToRemoveId
		)])
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, removeItem }}>
					<Navigation /> 

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
