import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import {data} from './data';
import { CartContext } from './contexts/CartContext';
import { ProductContext } from './contexts/ProductContext'
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import useCart from './hooks/useCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useCart([]);
	console.log(cart)

	const addItem = item => {
		// add the given item to the cart
		//console.log(item, cart)
		setCart([...cart, item])
	};

	const removeItem = item => {
		setCart(
			cart.filter(product => item.id !== product.id
		))
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{cart, removeItem}}>
					<Navigation />
					{/* Routes */}
					<Route exact path="/">
						<Products />
						{/* <Products products={products} addItem={addItem} /> */}
					</Route>
					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
