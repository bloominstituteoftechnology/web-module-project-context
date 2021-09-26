import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext  } from './contexts/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart

		console.log(item);

		setCart([...cart,item]); 

	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductContext.Provider value = {{ products, addItem }}>
				<Route exact path="/">
					<Products />
				</Route>

				<CartContext.Provider value={{cart}}>
					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
