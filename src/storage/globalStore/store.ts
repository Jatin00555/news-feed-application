import { configureStore } from "@reduxjs/toolkit";
import filterControl from "../slices/filterSlice";
import guardianApiSlice from "../../services/guardianService";
import newsApiSlice from "../../services/newsAPIService";
import nyTimesApiSlice from "../../services/nyTimesService";
import applicationInfo from "../slices/applicationInfoSlice";

export const store = configureStore({
  reducer: {
    [filterControl.name]: filterControl.reducer,
    [newsApiSlice.reducerPath]: newsApiSlice.reducer,
    [guardianApiSlice.reducerPath]: guardianApiSlice.reducer,
    [nyTimesApiSlice.reducerPath]: nyTimesApiSlice.reducer,
    [applicationInfo.name]: applicationInfo.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      newsApiSlice.middleware,
      guardianApiSlice.middleware,
      nyTimesApiSlice.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
