import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import ProductContext from './context/ProductContext';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const { products, cart, setCart } = useContext(ProductContext)

	const addItem = item => {
		// add the given item to the cart
		return setCart(item)
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
