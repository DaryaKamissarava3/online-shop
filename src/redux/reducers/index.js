import {createStore} from "redux";
import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  userReducer,
  productsReducer,
  cartReducer
});

const persistConfig = {
  key: 'root',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);