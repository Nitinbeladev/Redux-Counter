import { createSlice } from "@reduxjs/toolkit";

const AddCart = createSlice({
  name: "AddCart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addItem } = AddCart.actions;
export default AddCart.reducer;
