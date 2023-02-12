import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface FetchArg {
  categoryId: number;
  sortRule: string;
  pageNumber: number;
}

export interface FetchData  {
  category: number;
  color: string
  description: string[]; 
  id: string;
  images: string[]; 
  model: string;
  price: number;
  rating: number;
  size: string[]; 
  title: string;   
}

interface FetchState {
  items: FetchData[];
  status: string;
}

export const fetchItems = createAsyncThunk(
    'product/fetchItemsStatus',
    async (params: FetchArg) => {
        const {categoryId, sortRule, pageNumber} = params
        const {data} = await axios.get<FetchData[]> (
        `https://63c85f20075b3f3a91dfbea2.mockapi.io/products?category=${categoryId > 0 ? categoryId : ""}&sortBy=${sortRule}&page=${pageNumber}&limit=8`
          );
          return data;
    }
  )

const initialState: FetchState= {
  items: [],
  status: ''
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  setItems(state, action) {
    state.items = action.payload
  }
},
extraReducers: (builder) => {

    builder.addCase(fetchItems.pending, (state, action) => {
        state.status = 'loading'
      })
    builder.addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = 'success'
      })
    builder.addCase(fetchItems.rejected, (state, action) => {
        state.status = 'error'
      })
}
});
export const productSelector = (state: RootState) => state.product
export const { setItems } = productSlice.actions;

export default productSlice.reducer;
