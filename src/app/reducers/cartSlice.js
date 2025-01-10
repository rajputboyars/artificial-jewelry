// src/app/reducers/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
  items: [],
};

// Redux slice for the cart
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        console.log(existingItem.minimumOrderQuantity);
        
        existingItem.minimumOrderQuantity += 1; // Increase quantity if the item already exists
      } else {
        state.items.push(action.payload); // Add new item to cart
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id); // Remove item
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.minimumOrderQuantity = Math.max(item.minimumOrderQuantity + action.payload.increment, 1); // Update quantity with min value of 1
      }
    },
    clearCart: (state) => {
      state.items = []; // Clear all items in the cart
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
