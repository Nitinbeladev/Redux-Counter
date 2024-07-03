import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/AddCart"
const Store = configureStore({
  reducer: {
    CurrentCart: CartReducer,
    
  },
});

export default Store;
