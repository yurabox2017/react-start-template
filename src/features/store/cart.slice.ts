import { createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { ICartProduct } from 'src/entities/interfaces/ICartProduct';
import type { PayloadAction } from '@reduxjs/toolkit';
export const CART_PERSISTENT_STATE = 'cart';

export interface ICartItem {
  id: number;
  count: number;
}

export interface CartState {
  items: ICartItem[];
}

const initialState: CartState = loadState<CartState>(CART_PERSISTENT_STATE) ?? {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clear: (state) => {
      state.items = [];
    },
    delete: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      if (!existed) {
        return;
      }
      if (existed.count > 1) {
        state.items.map((i) => {
          if (i.id === action.payload) {
            i.count -= 1;
          }
          return i;
        });
        return;
      }
    },
    add: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      if (!existed) {
        state.items.push({ id: action.payload, count: 1 });
        return;
      }
      state.items.map((i) => {
        if (i.id === action.payload) {
          i.count += 1;
        }
        return i;
      });
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
