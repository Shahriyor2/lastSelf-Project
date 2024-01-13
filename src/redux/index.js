import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./reducers/filterSlice";
import cartSlice from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
  },
});
