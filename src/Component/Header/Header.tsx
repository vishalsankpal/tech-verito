import React, { useContext } from "react";
import "./Header.scss";
import { CartContext } from "../../Contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartItemCount } = useContext(CartContext);
  return (
    <header>
      <div className="logo-container">
        <Link to="/">TechVerito</Link>
      </div>
      <div className="cart-wrapper">
        <Link to="/cart">{cartItemCount}</Link>
      </div>
    </header>
  );
};

export default Header;
