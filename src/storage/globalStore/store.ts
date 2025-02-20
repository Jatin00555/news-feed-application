import { configureStore } from "@reduxjs/toolkit";
import filterControl from "../slices/filterSlice";

export const store = configureStore({
  reducer: {
    [filterControl.name]: filterControl.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
