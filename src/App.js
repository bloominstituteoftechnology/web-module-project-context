import React, { useState, useContext } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

// State Properties
function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  // Adding Item To Cart
  const addItem = (item) => {
    console.log("this is cart", cart);
    console.log("item", item);
    return setCart([...cart, item]);
  };

  // Remove Item From Cart
  const removeItem = (id) => {
    const index = cart.findIndex((x) => x.id === id);
    const newArray = [...cart];
    newArray.splice(index, 1);
    setCart(newArray);
  };

  // Returning Values
  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem, removeItem }}>
        <CartContext.Provider value={[cart]}>
          <Navigation />

          {/* Routes */}
          <Route exact path="/">
            <Products />
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
