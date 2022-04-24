import { createSlice } from "@reduxjs/toolkit";

export const Jobs = createSlice({
  name: "Jobs",
  initialState: {
    value: {},
  },
  reducers: {
    storeJobs: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeJobs } = Jobs.actions;

export default Jobs.reducer;
