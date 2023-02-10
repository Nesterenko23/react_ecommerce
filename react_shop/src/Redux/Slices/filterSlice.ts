import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface FilterState {
  categoryId: number;
  sortRule: string;
}

const initialState: FilterState = {
  categoryId: 0,
  sortRule: "price&order=desc",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSortRule: (state, action: PayloadAction<string>) => {
      state.sortRule = action.payload;
    },
  },
});

export const filterSelector = (state: RootState) => state.filter;

export const categoryIdSelector = (state: RootState) => state.filter.categoryId;

export const { setCategoryId, setSortRule } = filterSlice.actions;

export default filterSlice.reducer;
