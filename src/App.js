import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import './contexts/ProductContext'
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([
			...cart, item
		])
	};

	return (
		<div className="App">
			<CartContext.Provider value={{ cart }}>
				<Navigation/>
			</CartContext.Provider>

			{/* Routes */}
			<ProductContext.Provider value={{ products, addItem }}>
				<Route exact path="/">
					<Products/>
				</Route>
			</ProductContext.Provider >

			<CartContext.Provider value={{ cart }}>
				<Route path="/cart">
					<ShoppingCart/>
				</Route>
			</CartContext.Provider>
		</div>
	);
}
export default App;