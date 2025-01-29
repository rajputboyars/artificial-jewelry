// src/app/reducers/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';


// Function to load cart data from local storage
const loadCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : { items: [] };
  }
  return { items: [] }; // Fallback for SSR
};

// Function to save cart data to local storage
const saveCartToLocalStorage = (state) => {
  if (typeof window !== "undefined") {
  localStorage.setItem('cart', JSON.stringify(state));
  }
};

// Initial state for the cart
const initialState = loadCartFromLocalStorage();

// Redux slice for the cart
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.minimumOrderQuantity += 1; // Increase quantity if the item already exists
      } else {
        state.items.push(action.payload); // Add new item to cart
      }
      saveCartToLocalStorage(state); // Save updated cart to local storage
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id); // Remove item
      saveCartToLocalStorage(state); // Save updated cart to local storage
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.minimumOrderQuantity = Math.max(item.minimumOrderQuantity + action.payload.increment, 1); // Update quantity with min value of 1
      }
      saveCartToLocalStorage(state); // Save updated cart to local storage
    },
    clearCart: (state) => {
      state.items = []; // Clear all items in the cart
      saveCartToLocalStorage(state); // Save updated cart to local storage
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
