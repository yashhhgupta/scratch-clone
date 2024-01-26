import { configureStore } from "@reduxjs/toolkit";
import midSlice from "./mid-slice";
const store = configureStore({
  reducer: {
    mid: midSlice.reducer,
  },
});
export default store;
