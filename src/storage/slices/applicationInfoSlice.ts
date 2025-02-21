import { createSlice } from "@reduxjs/toolkit";
import { ApplicationInfoState } from "../../types/sliceTypes";

const initialState: ApplicationInfoState = {
  authors: [],
};
const applicationInfo = createSlice({
  name: "applicationInfo",
  initialState,
  reducers: {
    setAuthorList: (state, action) => {
      state.authors = action.payload;
    },
  },
});

export const { setAuthorList } = applicationInfo.actions;

export default applicationInfo;
