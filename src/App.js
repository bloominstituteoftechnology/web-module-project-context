import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// contexts
import { ProductContext } from './contexts/productContext';
import CartContext from './contexts/cartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<CartContext.Provider value={ cart }> value = {{ products, addItem}}>
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart/>
			</Route>
			</ProductContext.Provider>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
