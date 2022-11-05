import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE_ITEM_CART,
  DECREASE_ITEM_CART,
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

const increaseItemQuantity = (product) => ({
  type: INCREASE_ITEM_CART,
  payload: product
});

const decreaseItemQuantity = (product) => ({
  type: DECREASE_ITEM_CART,
  payload: product
});

export default {
  addToCart,
  removeFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
};