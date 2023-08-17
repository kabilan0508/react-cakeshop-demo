import { configureStore } from "@reduxjs/toolkit";
import CakeRecucer from "./CakeSlice";
import CartReducer from "./CartSlice";

export default configureStore({
  reducer: {
    cakestock: CakeRecucer,
    cart: CartReducer,
  },
});
