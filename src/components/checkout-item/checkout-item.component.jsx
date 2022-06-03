import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemDiv,
  CheckoutImageDiv,
  CheckoutImage,
  Name,
  CheckoutPrice,
  Value,
  Arrow,
  Quantity,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  //creamos estos handlers para tener un mejor control de donde estamos usando las funciones a las q llaman

  const clearItemFromCheckoutHandler = () => clearItemFromCart(cartItem);

  const removeItemFromCheckoutHandler = () => removeItemToCart(cartItem);

  const addItemFromCheckoutHandler = () => addItemToCart(cartItem);

  return (
    <CheckoutItemDiv>
      <CheckoutImageDiv>
        <CheckoutImage src={imageUrl} alt={`${name}`} />
      </CheckoutImageDiv>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemFromCheckoutHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>

        <Arrow onClick={addItemFromCheckoutHandler}>&#10095;</Arrow>
      </Quantity>
      <CheckoutPrice>{price}</CheckoutPrice>
      <div className="remove-button" onClick={clearItemFromCheckoutHandler}>
        &#10005;
      </div>
    </CheckoutItemDiv>
  );
};

export default CheckoutItem;
