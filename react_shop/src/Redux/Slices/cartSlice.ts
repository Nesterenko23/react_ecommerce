import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ProductType = {
  category: number;
  color: string;
  count: number
  description: string[];
  id: string
  images: string[];  
  model: string;
  price: number;
  rating: number;
  size: string;
  title: string; 
}

interface CartState {
  products: ProductType[];
  sizeId: number;
  count: number;
  totalCount: number;
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  sizeId: 0,
  count: 1,
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const sameObj = state.products.find(
        (el) =>
          el.id == action.payload.id &&
          el.size == action.payload.size[state.sizeId]
      );

      if (sameObj) {
        const prevCount = sameObj.count
        sameObj.count = state.count;
        state.totalPrice -= prevCount * sameObj.price;
        state.totalPrice += sameObj.count * sameObj.price;
      } else {
        const newObj = { ...action.payload };
        newObj.count = state.count;
        newObj.size = action.payload.size[state.sizeId];
        state.totalPrice += newObj.price * newObj.count;
        state.products.push(newObj);
        state.totalCount++;
      }

    },

    setSize: (state, action) => {
      state.sizeId = action.payload;
    },

    increase: (state) => {
      if (state.count != 9) {
        state.count++;
      }
    },

    decrease: (state) => {
      if (state.count != 1) {
        state.count--;
      }
    },

    removeProduct: (state, action) => {
      const newObj = { ...action.payload };
      const filterArray = state.products.filter(
        (el) => el.size != action.payload.size || el.id != action.payload.id
      );
      state.products = filterArray;
      state.totalCount--;
      state.totalPrice -= newObj.price * newObj.count;
    },

    setDefaultData: (state) => {
      state.count = 1;
      state.sizeId = 0;
    }
  },
});
export const cartSelector = (state: RootState) => state.cart;
export const productsSelector = (state: RootState) => state.cart.products;
export const { addProduct, setSize, increase, decrease, removeProduct, setDefaultData } =
  cartSlice.actions;

export default cartSlice.reducer;
