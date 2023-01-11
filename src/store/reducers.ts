import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface items {
  items: any;
}


const initialState: items = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: any; quantity: number }>
    ) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find(
        (item: any) => item.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...product, quantity });
      }
    },

    removeFromCart: (state, action: PayloadAction<any>) => {
      const { id } = action.payload;
      state.items = state.items.filter((item: any) => item.id !== id);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      state.items = state.items.map((item: any) => {
        if (item.id === productId) {
          item.quantity += quantity;
        }
        return item;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (
      state,
      action: PayloadAction<{ product: any; quantity: number }>
    ) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find(
        (item: any) => item.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...product, quantity });
      }
    },

    removeFromFavorite: (state, action: PayloadAction<any>) => {
      const { id } = action.payload;
      state.items = state.items.filter((item: any) => item.id !== id);
    },
    updateFavoriteQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      state.items = state.items.map((item: any) => {
        if (item.id === productId) {
          item.quantity += quantity;
        }
        return item;
      });
    },
  },
});

export const { addToFavorite, removeFromFavorite, updateFavoriteQuantity } = favoriteSlice.actions;


export default combineReducers({
  cart: cartSlice.reducer,
  favorite: favoriteSlice.reducer,
});
