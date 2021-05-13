import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import Products from './Products';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import ShoppingCartItem from './ShoppingCartItem';

import ProductContext from './../contexts/ProductContext';
import CartContext from './../contexts/CartContext';


const Navigation = props => {
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{props.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default function Navigation(){
	const product = useContext(ProductContent);
}
