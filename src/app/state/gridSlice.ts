import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

export interface GridState {
  activeProduct: Product | null;
}

const initialState: GridState = {
  activeProduct: null,
};

export const gridSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setActiveProduct: (state, action: PayloadAction<GridState["activeProduct"]>) => ({
      ...state,
      activeProduct: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { setActiveProduct } = gridSlice.actions;

export default gridSlice.reducer;
