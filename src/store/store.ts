import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import the cart reducer from cartSlice.ts

// Configure the Redux store with the cart reducer
const store = configureStore({
  reducer: {
    cart: cartReducer, // Define the cart reducer under the 'cart' slice of the store
  },
});

// Define types for RootState and AppDispatch based on the store configuration
export type RootState = ReturnType<typeof store.getState>; // Type for the root state of the Redux store
export type AppDispatch = typeof store.dispatch; // Type for the dispatch function of the Redux store

// Export the configured Redux store as the default export
export default store;
