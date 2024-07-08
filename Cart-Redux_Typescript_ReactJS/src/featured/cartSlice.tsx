import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import cartItems from "../utils/cartItems";

interface CartItemType {
  id: number;
  img: string;
  title: string;
  price: number;
  amount: number;
}

interface CartState {
  cartItems: CartItemType[];
  amount: number;
  total: number;
}

const initialState: CartState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    //ADDITEM
    addItem: (state, action: PayloadAction<CartItemType>) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem.id === itemId.id)
      if (existingItem) {
        existingItem.amount += item.amount;
      } else {
        state.cartItems.push(item);
      }
    },
    //REMOVEI
    removeItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== itemId)
    },
    //INC
    increaseAmount: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find(item => item.id === itemId);
      if (cartItem) {
        cartItem.amount += 1;
      }
    },
    //DEC
    decreaseAmount: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find(item => item.id === itemId);
      if (cartItem && cartItem.amount > 1) {
        cartItem.amount -= 1;
      } else if (cartItem && cartItem.amount === 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== itemId);
      }
    },
    //TOTAL
    calculateTotals: (state) => {
      state.amount = state.cartItems.reduce((total, item) => total + item.amount, 0);
      state.total = state.cartItems.reduce((total, item) => total + item.price * item.amount, 0)
    }
  },
});

export default cartSlice.reducer;
export type { CartState, CartItemType }; 
export const { clearCart, addItem, removeItem, increaseAmount, decreaseAmount, calculateTotals } = cartSlice.actions;