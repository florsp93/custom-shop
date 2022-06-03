import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartIconDiv, ItemCount, ShoppingIconStyled } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconDiv onClick={toggleCartOpen}>
      <ShoppingIconStyled />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconDiv>
  );
};

export default CartIcon;
