import { configureStore, createSlice } from "@reduxjs/toolkit";

const CartInitialState = {
  showCart: false,
  items: [],
  quantity: 0,
  singleQuantity: 1,
};
const CartSlice = createSlice({
  name: "showCart",
  initialState: CartInitialState,
  reducers: {
    ToshowCart(state) {
        state.showCart = !state.showCart;
    //   return !state.showCart
    },
    AddItems(state, actions) {


       
      state.quantity++

      const existing = state.items.find(item=> item.id === actions.payload.id)
      if(existing){
        existing.quantity++
      }else{
        state.items.push(actions.payload)
      }
    },
    increase(state) {
      // state.singleQuantity = state.singleQuantity + 1
      state.quantity = state.quantity + 1;
    },
    decrease(state, actions) {
      state.items = state.items.filter((item) => item.id !== actions.payload);
    },
    reduce(state){
        state.quantity = state.quantity - 1
    }
  },
});

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});

export const CartActions = CartSlice.actions;
