import { useState } from 'react';
import { useDialog } from './useDialog';
import { type SnackbarProps } from '../snackbar/Snackbar';
import { type DialogDisplayDuration } from '../constant';

type SnackbarDisplayDuration = DialogDisplayDuration;

type OpenSnackbarOptions = {
  displayDelay?: number;
  displayDuration?: SnackbarDisplayDuration;
} & Pick<SnackbarProps, 'position'>;

type OpenSnackbar = (text: string, openSnackbarOptions?: OpenSnackbarOptions) => void;

export function useSnackbar() {
  const [snackbarProps, setSnackbarProps] = useState<SnackbarProps>({
    open: false,
    text: '',
  });

  const { openDialog, closeDialog } = useDialog({ setDialogProps: setSnackbarProps });

  const openSnackbar: OpenSnackbar = (...props) => {
    openDialog(...props);
  };

  return {
    snackbarProps,
    openSnackbar,
    closeSnackbar: closeDialog,
  };
}
