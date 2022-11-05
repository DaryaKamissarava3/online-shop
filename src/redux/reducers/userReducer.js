import {LOGIN, LOGOUT} from "../actions/actionTypes";

const initialState = {
  isLogged: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: action.payload
      };
    default:
      return state;
  }
}

export default userReducer;