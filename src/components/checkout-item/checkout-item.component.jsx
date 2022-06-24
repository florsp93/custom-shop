import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemFromCheckoutHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  const removeItemFromCheckoutHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  const addItemFromCheckoutHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));

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
