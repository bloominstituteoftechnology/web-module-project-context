import React, {createContext } from 'react';

export const CartContext = createContext();

const { products, addItem } = useContext(CartContext);