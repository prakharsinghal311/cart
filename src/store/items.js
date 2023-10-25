import { createSlice } from "@reduxjs/toolkit";

const initialItemsState = { shirts: 0, pants: 0 };

const itemsSlice = createSlice({
  name: "items",
  initialState: initialItemsState,
  reducers: {
    addShirts(state, action) {
      state.shirts = state.shirts + 1;
    },
    removeShirts(state, action) {
      state.shirts = state.shirts - 1;
    },
    addPants(state, action) {
      state.pants = state.pants + 1;
    },
    removePants(state, action) {
      state.pants = state.pants - 1;
    },
    // addCoats(state, action) {},
    // removeCoats(state, action) {},
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice.reducer;
