import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PaginationState {
  pageNumber: number;
}

const initialState: PaginationState = {
  pageNumber: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setPageNumber } = paginationSlice.actions;
export const paginationSelector = (state: RootState) => state.pagination;
export default paginationSlice.reducer;
