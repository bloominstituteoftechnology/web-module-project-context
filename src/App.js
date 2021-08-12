import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//contexts //
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// State Properties
function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		return (setCart([
			...cart, item
		]))
	};

	return (
		<div>
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={[cart]}>
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
		</div>
	);
}

export default App;
