// src/app/reducers/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';


// Function to load cart data from local storage
const loadWishlistFromLocalStorage = () => {
  const storedWishlist = localStorage.getItem('wishlist');
  return storedWishlist ? JSON.parse(storedWishlist) : { items: [] };
};

// Function to save cart data to local storage
const saveWishlistToLocalStorage = (state) => {
  localStorage.setItem('wishlist', JSON.stringify(state));
};



const initialState = loadWishlistFromLocalStorage();

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload); // Add new item
      }
      saveWishlistToLocalStorage(state);
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id); // Remove item
      saveWishlistToLocalStorage(state);
    },
    clearWishlist: (state) => {
      state.items = []; // Clear wishlist
      saveWishlistToLocalStorage(state);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
