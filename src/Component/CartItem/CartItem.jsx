import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import "./CartItem.scss";

const CartItem = ({ item }) => {
  const { image, title, price, qty } = item;
  const { increaseqty, decreaseqty, removeProduct } = useContext(CartContext);
  const increaseQtyHandler = (productId) => {
    increaseqty(productId);
  };
  const decreaseQtyHandler = (productId) => {
    decreaseqty(productId);
  };
  const deleteHandler = (productId) => {
    removeProduct(productId);
  };
  return (
    <div className="cart-card">
      <div className="img-title-price-wrapper">
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
      </div>
      <hr />
      <div className="desc-btn-wrapper">
        <button onClick={() => deleteHandler(item.id)}>Remove</button>
        <div>
          <button onClick={() => decreaseQtyHandler(item.id)}>-</button>
          <p>{qty}</p>
          <button onClick={() => increaseQtyHandler(item.id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
