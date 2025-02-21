import { createSlice } from "@reduxjs/toolkit";
import { FilterState } from "../../types/sliceTypes";

const initialState: FilterState = {
  query: "",
  source: [],
  category: [],
  author: [],
  timeLine: null,
};

const filterControl = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    setSource: (state, action) => {
      state.source = action.payload;
    },
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setTimeLine: (state, action) => {
      state.timeLine = action.payload;
    },
  },
});

export const {
  setAuthor,
  setSource,
  setCategory,
  setSearchQuery,
  setTimeLine,
} = filterControl.actions;
export default filterControl;
