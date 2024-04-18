import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../hook';
import { __closePopup, _openPopup, type PopupState } from './popupReducer';

export function usePopup() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.popup);

  console.log(state);

  const openPopup = useCallback(
    (body: Omit<PopupState, 'open'>) => {
      dispatch(_openPopup(body));
    },
    [dispatch]
  );

  const closePopup = useCallback(() => {
    dispatch(__closePopup());
  }, [dispatch]);

  return { state, openPopup, closePopup };
}
