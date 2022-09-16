import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: '',
    count: 0
}

const infoReducer = createSlice({
    name: 'info',
    initialState,
    reducers: {
        _increaseCount: (state) => {
            state.count = state.count + 1;
        }
    }
});

const {reducer, actions} = infoReducer;

export const {_increaseCount} = actions;
export default reducer;
