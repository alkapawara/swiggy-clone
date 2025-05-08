import { createSlice } from "@reduxjs/toolkit";

const loadCart = () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  };

const cartSlice=createSlice({
name:"cart",
initialState:{
    items: loadCart(),

},
reducers:{
    addItem:(state, action) => {
        const existingItem = state.items.find((item) => item.id === action.payload.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items.push({ ...action.payload, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(state.items)); // Save to localStorage
      },
      removeItem: (state, action) => {
        const existingItem = state.items.find((item) => item.id === action.payload);
        if (existingItem) {
          if (existingItem.quantity > 1) {
            existingItem.quantity -= 1;
          } else {
            state.items = state.items.filter((item) => item.id !== action.payload);
          }
          localStorage.setItem("cart", JSON.stringify(state.items)); // Update localStorage
        }
      },

      removeFromCart: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        localStorage.setItem("cart", JSON.stringify(state.items)); // Update localStorage
      },
      clearCart: (state) => {
        state.items = [];
        localStorage.removeItem("cart"); // Remove from localStorage
      },

}
})
export const{addItem,removeFromCart,removeItem}=cartSlice.actions;
export default cartSlice.reducer