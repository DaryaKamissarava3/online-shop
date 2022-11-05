import {LOGIN, LOGOUT} from "./actionTypes";

const logIn = (payload) => ({
  type: LOGIN,
  payload: payload
});

const logOut = (payload) => ({
  type: LOGOUT,
  payload: payload
});

export default {
  logIn,
  logOut
}