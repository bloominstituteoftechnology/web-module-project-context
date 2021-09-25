import React from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../src/contexts'
import ShoppingCart from './ShoppingCart'; 

const Navigation = ()=> {
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
