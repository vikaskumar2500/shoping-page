import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartReducer";
import errorReducer from "./uiReducer";

const store = configureStore({
  reducer: { cart: cartReducer, error: errorReducer },
});

export default store;
