import React, {createContext } from 'react';


export const ProductContext = createContext();

    const { products, addItem } = useContext(ProductContext);
