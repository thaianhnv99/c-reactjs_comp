/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  name: '',
  count: 0,
  list: [],
  status: false,
};

export const fetchInfo: any = createAsyncThunk('info/fetchInfo', async () => {
  const response = await axios.get<any>('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const infoReducer = createSlice({
  name: 'info',
  initialState,
  reducers: {
    _increaseCount: (state) => {
      state.count = state.count + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInfo.pending, (state) => {
      state.status = true;
    });
    builder.addCase(fetchInfo.fulfilled, (state, action) => {
      console.log(action.payload);
      state.list = action.payload;
    });
  },
});

const { reducer, actions } = infoReducer;

export const { _increaseCount } = actions;
export default reducer;
