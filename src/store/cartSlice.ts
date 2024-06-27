import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for each item in the cart
type CartItem = {
  id: number;
  name: string;
  size: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
};

// Create a slice for managing the cart state
const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState: [] as CartItem[], // Initial state is an empty array of CartItem
  reducers: {
    // Action to add an item to the cart
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.push({ ...action.payload }); // Add the new item to the cart
    },
    // Action to set all items in the cart (useful for initializing or resetting the cart)
    setItems: (state, action: PayloadAction<CartItem[]>) => {
      return action.payload; // Replace all items in the cart with the provided array
    },
    // Action to increase the quantity of a specific item in the cart
    increaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const index = state.findIndex((item) => item.id === action.payload.id); // Find the index of the item
      if (index !== -1) {
        state[index].quantity++; // Increase the quantity if the item exists in the cart
      }
    },
    // Action to decrease the quantity of a specific item in the cart
    decreaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const index = state.findIndex((item) => item.id === action.payload.id); // Find the index of the item
      if (index !== -1) {
        state[index].quantity--; // Decrease the quantity if the item exists in the cart
      }
    },
    // Action to remove a specific item from the cart
    removeItem: (state, action: PayloadAction<CartItem>) => {
      return state.filter((item) => item.id !== action.payload.id); // Remove the item from the cart by filtering it out
    },
  },
});

// Export each action creator for use in components
export const {
  addItem,
  removeItem,
  setItems,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

// Export the reducer function to be used in the Redux store
export default cartSlice.reducer;
