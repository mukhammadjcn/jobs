import { configureStore } from "@reduxjs/toolkit";
import Jobs from "./fetch/Jobs";

export const store = configureStore({
  reducer: {
    Jobs,
  },
});
