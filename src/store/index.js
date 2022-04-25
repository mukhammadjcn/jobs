import { configureStore } from "@reduxjs/toolkit";
import Jobs from "./fetch/Jobs";
import Login from "./fetch/Login";

export const store = configureStore({
  reducer: {
    Jobs,
    Login,
  },
});
