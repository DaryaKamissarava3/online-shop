import {ADD_TO_CART, CLEAR_CART, INCREASE_QUANTITY, REMOVE_FROM_CART} from "../actions/actionTypes";

const initialState = {
  cart: [],
  quantity: 0,
  totalAmount: 0
}

const conditionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        quantity: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter(item => item.id !== action.payload.id)],
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
}

export default conditionsReducer;