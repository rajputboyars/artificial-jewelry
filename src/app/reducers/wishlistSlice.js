// src/app/reducers/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Wishlist items
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload); // Add new item
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id); // Remove item
    },
    clearWishlist: (state) => {
      state.items = []; // Clear wishlist
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
