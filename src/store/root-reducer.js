import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/userReducer";
import { categoryReducer } from "./category/categoryReducer";
import { cartReducer } from "./cart/cartReducer";

export const rootReducer=combineReducers({
    user:userReducer,
    categories:categoryReducer,
    cart:cartReducer
})