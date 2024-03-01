import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import ToastDebug from 'src/components/common/toast-debug/ToastDebug';
import Dialog from 'src/components/common/toast/dialog/Dialog';
import { useSnackbar } from 'src/components/common/toast/hooks/useSnackbar';
// import { useToast } from 'src/components/common/toast/hooks/useToast';
import SnackBar from 'src/components/common/toast/snackbar/Snackbar';

const Toast = () => {
  // const { toastProps, openToast } = useToast();
  const { snackbarProps, openSnackbar } = useSnackbar();

  console.log(snackbarProps);

  const handleOpen = () => {
    openSnackbar('random', { position: 'bottom' });
  };

  return (
    <Stack spacing={3}>
      <Divider>Dialog</Divider>
      <Dialog />
      <Divider>Toast</Divider>
      <Divider>Snackbar</Divider>
      <Box>
        <Button onClick={handleOpen}>Open Snackbar</Button>
        <SnackBar {...snackbarProps} />
      </Box>
      <Divider>Toast debug</Divider>
      <ToastDebug />
    </Stack>
  );
};

export default Toast;
