import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import ProductContex from './context/ProductContext';
import CartContex from './context/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart,item])
	};

	return (
		<ProductContex.Provider value = {{products,addItem}}>
		<CartContex.Provider value = {{cart}}>


		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products/>
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</div>

		
		</CartContex.Provider>
		</ProductContex.Provider>
	);
}

export default App;
