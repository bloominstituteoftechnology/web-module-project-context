import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
// import { ProductContext } from './contexts/ProductContext';
// import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Step 1: create the context just like a store!
export const ProductContext = createContext();
export const CartContext = createContext();


function App() {
	const [products] = useState(data);
	console.log("App here: ", products)
	const [cart, setCart] = useState([products]);

	const addItem = item => {
		setCart(item);
	};

	return (
		<ProductContext.Provider value={products}>
			<CartContext.Provider value={cart}>
				<div className="App">
					<Navigation />

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
