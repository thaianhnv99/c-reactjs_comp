import { useState } from 'react';
import { useDialog, type DialogProps } from '../hooks';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DIALOG_DISPLAY_DURATION } from '../constant';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Backdrop from '@mui/material/Backdrop';

const Dialog = () => {
  const [dialogProps, setDialogProps] = useState<DialogProps>({
    open: false,
    text: '',
  });

  const { openDialog, closeDialog } = useDialog({ setDialogProps: setDialogProps });

  const handleOpenDialog = () => {
    openDialog('message', {
      displayDuration: DIALOG_DISPLAY_DURATION.INDIFINITE,
    });
  };

  const handleCloseDialog = () => {
    closeDialog();
  };

  return (
    <Box>
      <Button onClick={handleOpenDialog}>Open dialog</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={dialogProps.open}
      >
        <Box
          component="dialog"
          sx={{
            position: 'fixed',
            top: '50%',
            transform: 'translateY(-50%)',
            border: '1px solid gray',
            width: 200,
            height: 150,
            display: dialogProps.open ? 'block' : 'none',
            '&:backdrop': {
              backgroundColor: 'red',
            },
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}
            onClick={handleCloseDialog}
          >
            <Box component="span" sx={{ width: '1rem', height: '1rem', fontSize: '1rem' }}>
              x
            </Box>
          </IconButton>
          <Typography>{dialogProps.text}</Typography>
        </Box>
      </Backdrop>
    </Box>
  );
};

export default Dialog;
