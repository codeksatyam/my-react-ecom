// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Make sure this key matches how you access the cart state
  },
});

export default store;
