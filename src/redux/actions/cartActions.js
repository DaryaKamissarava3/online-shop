import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  TOTAL_AMOUNT_OF_CART,
  QUANTITY
} from "./actionTypes";

const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product
});

const clearCart = () => ({
  type: CLEAR_CART,
});

const cartItemSum = (payload) => ({
  type: TOTAL_AMOUNT_OF_CART,
  payload:payload
});

const cartItemQuantity = (payload) => ({
  type: QUANTITY,
  payload:payload
});

export default {
  addToCart,
  removeFromCart,
  clearCart,
  cartItemSum,
  cartItemQuantity
};