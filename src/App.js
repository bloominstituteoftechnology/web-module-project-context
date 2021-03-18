import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import {data} from './data';
import { ShoppingCartContext } from './contexts/ShoppingCartContext';
import { ProductContext } from './contexts/ProductContext'
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	
	console.log(cart)

	const addItem = item => {
		// add the given item to the cart
		//console.log(item, cart)
		setCart([...cart, item])
	};

	// const removeItem = cart.filter(function(item) {			
	// 	if (!this[item.id]) {
	// 		this[item.id] = 1
	// 	}
	// 		else if (this[item.id] == 1){
	// 			return this[item.id] = 2, false
	// 		}
	// 		return true
	// 		// product => item.product_id !== product.product_id
	// 	},{})
	// console.log(removeItem)

	const removeItem = item => {
		setCart(
			cart.filter(product => item.product_id !== product.product_id
		))
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<ShoppingCartContext.Provider value={{cart, removeItem}}>
					<Navigation />
					{/* Routes */}
					<Route exact path="/">
						<Products />
						{/* <Products products={products} addItem={addItem} /> */}
					</Route>
					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</ShoppingCartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
