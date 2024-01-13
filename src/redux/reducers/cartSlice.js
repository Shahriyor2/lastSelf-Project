import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
  totalPrice: 0,
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
      state.totalPrice = state.items.reduce(
        (sum, obj) => sum + obj.price * obj.count,
        0
      );
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem && findItem.count > 0) {
        findItem.count--;
        state.totalPrice = state.totalPrice - findItem.price;

        if (findItem.count === 0) {
          state.items = state.items.filter(
            (obj) => obj.id !== action.payload.id
          );
        }
      }
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
