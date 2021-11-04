import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './sass/index.scss';
import App from './App';
import ProductContext from './context/ProductContext';
import data from './data';

const AppWithRouter = withRouter(App);

const Application = () => {
	const [products] = useState(data);
    const [cart, setCart] = useState(products[0]);
    return(<ProductContext.Provider value={{products, cart, setCart}}><AppWithRouter /></ProductContext.Provider>)
}

ReactDOM.render(
	<Router>
		
		<Application />
	</Router>,
	document.getElementById('root')
);
