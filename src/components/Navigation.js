import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const cart = useContext(CartContext);
const Navigation = () => {
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
