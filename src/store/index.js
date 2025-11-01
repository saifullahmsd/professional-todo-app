import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import { localStorageMiddleware } from "./middleware/localStorageMiddleware";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
