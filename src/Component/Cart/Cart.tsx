import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.scss";
const Cart = () => {
  const { cart, cartTotal } = useContext(CartContext);
  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        cart.map((item) => <CartItem item={item} key={item.id} />)
      ) : (
        <div>
          <h2>Cart is Empty</h2>
          <Link to="/">Go to Home</Link>
        </div>
      )}

      {cart.length > 0 && (
        <div>
          {" "}
          <h2>Total: ${cartTotal.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
