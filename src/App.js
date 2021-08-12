import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import ProductContext from "./contexts/ProductContext";

import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		// console.log(item);
		setCart([ ...cart, item ])
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductContext.Provider value={products, addItem} >
				<Route exact path="/">
					<Products />
				</Route>
			</ProductContext.Provider>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</div>
	);
}

export default App;
