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
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = getTotalPrice(state.items);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
        }
      }
      state.totalPrice = state.items.reduce(
        (sum, obj) => sum + obj.price * obj.count,
        0
      );
    },
    removeItemPizza(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
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
