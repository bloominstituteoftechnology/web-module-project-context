import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		const checker = cart.some(book => book===item);
		// add the given item to the cart
		return checker 
		?  cart
		: setCart([...cart,item])
	};

	const removeItem = item => {
		const filtered = cart.filter(book => book.id!==item.id);
		setCart(filtered)
	}

	return (
		<div className="App">
			<ProductContext.Provider value = {{ products, addItem}}>
			<CartContext.Provider value = {{cart,removeItem}}>
			<Navigation  />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart  />
			</Route>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
