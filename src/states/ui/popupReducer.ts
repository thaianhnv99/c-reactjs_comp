import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ReactNode } from 'react';

export type PopupState = {
  open: boolean;
  content: ReactNode;
  button: ReactNode;
  title?: ReactNode;
  closeIcon?: boolean;
};

const initialState: PopupState = {
  open: false,
  content: '',
  button: null,
  closeIcon: true,
};

const popupReducer = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    _openPopup: (state, action: PayloadAction<Omit<PopupState, 'open'>>) => {
      return {
        ...state,
        ...action.payload,
        open: true,
      };
    },
    __closePopup: () => {
      return initialState;
    },
  },
});

const { reducer, actions } = popupReducer;

export const { _openPopup, __closePopup } = actions;
export default reducer;
