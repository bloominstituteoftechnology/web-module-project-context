import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

// Contexts
import { ProductContext } from "./contexts/productContext";
import { CartContext } from "./contexts/cartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <div className="App">
        <CartContext.Provider value={{ cart }}>
          <Navigation />
          {/* Routes */}
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </CartContext.Provider>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
