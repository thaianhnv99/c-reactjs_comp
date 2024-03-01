/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiClient } from 'src/lib';
import { toast } from 'react-hot-toast';

export interface AuthState {
  userInfo: User | null;
  loading: boolean;
  userToken: string;
  error: any;
  success: boolean;
  isAuth: boolean;
}
const initialState: AuthState = {
  loading: false,
  userInfo: null,
  userToken: '',
  error: null,
  success: false,
  isAuth: false,
};

export const userLogin: any = createAsyncThunk(
  'auth/login',
  async (user: User, { rejectWithValue }) => {
    try {
      const response = await apiClient.post<UserProfileResponse>('/auth/login', user);
      if (!response.data || !response.data.access_token || !response.data.user) {
        toast.error('Not found token');
      }
      toast.success('Login successful');
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogout: any = createAsyncThunk('auth/logout', async () => {
  try {
    const response = await apiClient.get('/auth/logout');
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
});

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    _login: (state, action) => {
      state.userInfo = action.payload;
    },
    _logout: (state) => {
      state.userInfo = null;
      state.userToken = '';
    },
  },
  extraReducers: (builder) => {
    //Login
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.userInfo = action.payload.user;
      state.userToken = action.payload.access_token;
      state.isAuth = action.payload.user && action.payload.access_token;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.loading = false;
      state.error = true;
      state.isAuth = false;
      state.userInfo = null;
      state.userToken = '';
    });

    //Logout
    builder.addCase(userLogout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogout.fulfilled, (state) => {
      state.loading = false;
      state.isAuth = false;
      state.userInfo = null;
      state.userToken = '';
    });
  },
});

const { reducer, actions } = authReducer;

export const { _login, _logout } = actions;
export default reducer;
