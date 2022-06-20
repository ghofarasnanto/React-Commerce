import { combineReducers } from "redux";

import authReducer from "./auth";
import productReducer from "./products"
import cartReducer from "./cart"

const reducers = combineReducers({
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
});

export default reducers;