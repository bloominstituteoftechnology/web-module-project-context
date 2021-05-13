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
	const [products] = useState(data);
	const [cart, setCart] = useState(localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : []);

	const addItem = (item) => {
		const data = [...cart, item];
		setCart(data);
		localStorage.setItem('Cart', JSON.stringify(data));
	};

	const removeItem = (id) => {
		const data = [...cart.filter(item => item.id !== id)];
		setCart(data);
		if (data.length === 0) {
			localStorage.removeItem('Cart');
		}
		else {
			localStorage.setItem('Cart', JSON.stringify(data));
		}
	};

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
