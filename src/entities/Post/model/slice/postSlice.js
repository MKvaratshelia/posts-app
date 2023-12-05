import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    limit: 0,
    showMore: true,
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setLimit: (state) => {
            state.limit += 20;
        },
        resetLimit: (state) => {
            state.limit = 20;
        },
        setShowMore: (state, action) => {
            state.showMore = action.payload;
        },
    },
});

export const { setLimit, resetLimit, setShowMore } = postSlice.actions;

export default postSlice.reducer;
