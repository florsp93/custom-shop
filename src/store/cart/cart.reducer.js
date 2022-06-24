import { CART_ACTION_TYPES } from "./cart.types";

//1° declaramos el estado inicial del reducer
export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

//2° el reducer SOLO debe actualizar el estado, no debe tener la logica de como actualizarlo
export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
