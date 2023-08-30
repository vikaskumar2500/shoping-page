import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  items: [],
  totalPrice: 0,
  checked:false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    onCart: (state) => {
      state.showCart = !state.showCart;
    },
    replaceCartItem: (state, action) => {
      state.items = action.payload;
      state.totalPrice = action.payload.reduce(
        (total, item) => total + item.qty * item.price,
        0
      );
    },
    addCartItem: (state, action) => {
      // payload : item
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.qty += 1;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice += action.payload.price;
      state.checked = true;
    },
    removeCartItem: (state, action) => {
      // payload : id
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem.qty === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        findItem.qty -= 1;
      }
      state.totalPrice -= findItem.price;
      state.checked = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
