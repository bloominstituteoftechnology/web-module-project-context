import React, { useState,  createContext, useContext, useReducer} from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { reducer, initialState } from './reducer';
import ProductContext from '../src/contexts'
import CartContext from '../src/contexts'
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	//const [products] = useState(data);
	const [products, dispatch] = useReducer(reducer, initialState)
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart({...cart,  [item.target.name]: item.target.value})
	};

	return (
		<div className="App">
			<ProductContext.Provider value={[products, dispatch]}>
				<CartContext.Provider >
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route>
				</CartContext.Provider>	
			</ProductContext.Provider>
		</div>
	);
}

export default App;
