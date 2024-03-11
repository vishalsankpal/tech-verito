import React, { useContext, useState } from "react";
import "./Product.scss";
import { CartContext } from "../../Contexts/CartContext";
// import { Link } from "react-router-dom";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  //Will add more property as per our requirement
}
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [popup, setPopup] = useState(false);
  const handleAddProductToCart = (product: Product) => {
    addToCart(product);
    setPopup(true);
  };
  const { image, title, description, price } = product;
  return (
    <div className="product-card">
      {/* <Link to={`/product/${product.id}`}> */}
      <div className="img-title-price-wrapper">
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
      </div>
      <hr />
      <div className="desc-btn-wrapper">
        <p>{description}</p>
        <button onClick={() => handleAddProductToCart(product)}>
          Add to Cart
        </button>
      </div>
      {/* </Link> */}
      {popup && <div className="sweetPopup">Successfully Added</div>}
    </div>
  );
};

export default Product;
