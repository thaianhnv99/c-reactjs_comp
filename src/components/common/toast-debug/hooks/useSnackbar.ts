import { useState } from 'react';
import { type SnackbarProps } from '../snackbar/Snackbar';
import { type DialogDisplayDuration } from '../constant';
import { useDialog } from './useDialog';
import { type CloseDialog } from '../../toast/hooks/useDialog';

type UseSnackbarProps = {
  snackbarProps: SnackbarProps;
  openSnackbar: OpenSnackbar;
  closeSnackbar: CloseDialog;
};

type OpenSnackbarOption = {
  displayDuration?: DialogDisplayDuration;
  displayDelay?: number;
} & Pick<SnackbarProps, 'position'>;

type OpenSnackbar = (text: string, openSnackbarOption?: OpenSnackbarOption) => void;

export function useSnackbar(): UseSnackbarProps {
  const [snackbarProps, setSnackbarProps] = useState<SnackbarProps>({
    open: false,
    text: '',
  });

  const { openDialog, closeDialog } = useDialog({ setDialogProps: setSnackbarProps });

  const openSnackbar: OpenSnackbar = (...props) => {
    openDialog(...props);
  };

  return { snackbarProps, openSnackbar, closeSnackbar: closeDialog };
}
