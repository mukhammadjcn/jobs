import { createSlice } from "@reduxjs/toolkit";

export const Login = createSlice({
  name: "Login",
  initialState: {
    user: {},
  },
  reducers: {
    storeUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeUser } = Login.actions;

export default Login.reducer;
