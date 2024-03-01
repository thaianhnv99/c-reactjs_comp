import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DIALOG_DISPLAY_DURATION } from './constant';
import { useSnackbar } from './hooks/useSnackbar';

const ToastDebug = () => {
  const { snackbarProps, openSnackbar } = useSnackbar();

  const handleOpenToast = () => {
    openSnackbar('text snackbar', { displayDuration: DIALOG_DISPLAY_DURATION.INDIFINITE });
  };

  console.log(snackbarProps);

  return (
    <Box>
      <Button onClick={handleOpenToast}>Open</Button>
    </Box>
  );
};

export default ToastDebug;
