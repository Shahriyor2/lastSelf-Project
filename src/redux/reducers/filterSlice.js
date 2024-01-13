import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "raiting",
  },
  loading: true,
  countPage: 1,
  searchValue: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setIsLoading(state, action) {
      state.loading = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPageCount(state, action) {
      state.countPage = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },

  },
});

export const {
  setCategoryId,
  setIsLoading,
  setSort,
  setPageCount,
  setSearchValue,
} = filterSlice.actions;
export default filterSlice.reducer;
