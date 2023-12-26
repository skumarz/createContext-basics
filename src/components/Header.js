import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import "./styles.css";
import { useState } from "react";

const Header = () => {
  const { cart } = useState(CartContext);

  // console.log("Header component rendered. Cart length:", (cart ? cart.length : 0));

  return (
    <div>
      <span className="header">React Context API</span>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart ? cart.length : 0})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
