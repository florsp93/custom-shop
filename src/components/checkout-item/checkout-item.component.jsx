import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  //creamos estos handlers para tener un mejor control de donde estamos usando las funciones a las q llaman

  const clearItemFromCheckoutHandler = () => clearItemFromCart(cartItem);

  const removeItemFromCheckoutHandler = () => removeItemToCart(cartItem);

  const addItemFromCheckoutHandler = () => addItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemFromCheckoutHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>

        <div className="arrow" onClick={addItemFromCheckoutHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemFromCheckoutHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
