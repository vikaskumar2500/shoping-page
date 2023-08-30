import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:'cart',
  initialState:{showCart:false},
  reducers:{
    onCart:(state)=> {
      state.showCart = !state.showCart;
    }
  }
});

export const cartActions = cartSlice.actions; 

export default cartSlice.reducer;
