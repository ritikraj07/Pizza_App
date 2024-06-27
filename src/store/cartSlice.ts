// store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  name: string;
  size: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartItem[],
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.push({...action.payload,});
    },
    setItems: (state, action: PayloadAction<CartItem[]>) => {
      return action.payload;
    },
    increaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index].quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index].quantity--;
      }
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem, setItems, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
