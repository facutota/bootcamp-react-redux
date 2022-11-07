// Index Selectors
export const isLoadingDetail = (state) => state.resultsSlice.isLoading;
export const detailError = (state) => state.resultsSlice.error;
export const detailData = (state) => state.resultsSlice.data;
export const addSearchItem = (state) => state.resultsSlice.searchItem;

// Detail Selectors
export const isLoadingMealDetail = (state) => state.detailSlice.isLoading;
export const mealDetailData = (state) => state.detailSlice.data;
export const mealDetailError = (state) => state.detailSlice.error;