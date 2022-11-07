import { createSlice } from "@reduxjs/toolkit";

    import apiCall from "../../api";

const initialState = {
    isLoading: false,
    error: {},
    data: {},
    searchItems: [],
};

const resultsSlice = createSlice ({
    
    name: 'mealResult',
    initialState,
    reducers: {
            fetchRecipesStart(state) {
                
                state.isLoading = true;
            },
            fetchRecipesComplete(state, action) {
                state.isLoading = false;
                state.data = action.payload;
            },
            fetchRecipesError(state, action) {
                state.isLoading = false;
                state.error = action.payload;
            },
            searchItems:(state, action) => {
                state.searchItems, action.payload;
            }
        
    }

});

export const { fetchRecipesStart, fetchRecipesComplete, fetchRecipesError, searchItems } = resultsSlice.actions;

export const fetchRecipes = (text) => async (dispatch) => {
    try {
        dispatch(fetchRecipesStart());
        const response = await apiCall(`/search.php?s=${text}`);
        dispatch(fetchRecipesComplete(response?.meals));
    } catch (error) {
        dispatch(fetchRecipesError(error));
    }
};

export const addSearchItem = (payload) => ({
   
    payload,
});

export default resultsSlice.reducer;