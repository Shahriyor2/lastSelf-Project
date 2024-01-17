import { createSlice } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../selfFunctions/getCartFromLS";
import { getTotalPrice } from "../../selfFunctions/getTotalPriceForLS";

const { items, totalPrice } = getCartFromLS();

const initialState = {
  items,
  count: 0,
  totalPrice,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.typeIndex === action.payload.typeIndex
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = getTotalPrice(state.items);
    },
    minusItem(state, action) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.typeIndex === action.payload.typeIndex
      );

      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
        }
      }
      state.totalPrice = getTotalPrice(state.items);
    },
    removeItemPizza(state, action) {
      state.items = state.items.filter(
        (obj) =>
          obj.id !== action.payload.id ||
          obj.typeIndex !== action.payload.typeIndex
      );
      state.totalPrice = getTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, minusItem, removeItemPizza, clearItems } =
  cartSlice.actions;
export default cartSlice.reducer;
