import { useSelector, useDispatch } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import { CartIconDiv, ItemCount, ShoppingIconStyled } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconDiv onClick={toggleIsCartOpen}>
      <ShoppingIconStyled />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconDiv>
  );
};

export default CartIcon;
