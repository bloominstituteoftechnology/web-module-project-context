import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import ProductContext from './contexts/ProductContext'
import CartContext from './contexts/CartContext'
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	
	console.log('PRODUCTS: ', products)
	console.log("CART: ", cart)
	const addItem = item => {
		setCart(item)
		return({
			...cart,
			item
		})
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
		<CartContext.Provider value={cart}>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
