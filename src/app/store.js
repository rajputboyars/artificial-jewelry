// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import wishlistReducer from "./reducers/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);
