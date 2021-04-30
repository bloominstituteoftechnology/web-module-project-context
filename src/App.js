import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data); //one state property
	const [cart, setCart] = useState([]); //two state property

	const addItem = item => {
		// add the given item to the cart
		const updateCart = [...cart, item]
		setCart(updateCart);
		console.log("Added things to cart", updateCart);
	};

	return (
		<div className="App">
			<Navigation cart={cart} /> 

			{/* Routes */}
			<Route exact path="/">
				<Products products={products} addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</div>
	);
}

export default App;
