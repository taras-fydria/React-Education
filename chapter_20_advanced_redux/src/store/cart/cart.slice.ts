import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../components/Cart";

export interface CartState {
  items: ICartItem[];
  totalQuantity: number;
  isChanged: boolean;
}

export const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  isChanged: false,
};

export interface AddToCartPayload {
  id: string;
  price: number;
  title: string;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<AddToCartPayload>) {
      const newItem = action.payload;
      console.log(state.items);

      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          price: newItem.price,
          total: newItem.price,
          quantity: 1,
          id: newItem.id,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.total + newItem.price;
      }

      state.isChanged = true;
    },
    removeItem(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (!existingItem) return;
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
      }
      state.isChanged = true;
    },
    replaceCart(state, action: PayloadAction<CartState>) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
  },
});

export const cartActions = cartSlice.actions;
