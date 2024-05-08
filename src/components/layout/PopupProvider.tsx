import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useEffect, useMemo } from 'react';
import { usePopup } from 'src/states/ui/usePopup';

const PopupProvider = () => {
  const { state, closePopup } = usePopup();

  console.log('state', state);

  const title = useMemo(() => {
    if (state.title instanceof Node) {
      return state.title;
    }
    return <Typography>{state.title}</Typography>;
  }, [state.title]);

  const content = useMemo(() => {
    if (state.content instanceof Node) {
      return state.content;
    }
    return <Typography>{state.content}</Typography>;
  }, [state.content]);

  useEffect(() => {
    if (state.open) {
      document.documentElement.style.scrollbarGutter = 'stable';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.scrollbarGutter = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
  }, [state.open]);

  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={state.open}>
      <Box
        component="dialog"
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid gray',
          width: 200,
          height: 150,
          display: state.open ? 'block' : 'none',
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
          onClick={closePopup}
        >
          <Box component="span" sx={{ width: '1rem', height: '1rem', fontSize: '1rem' }}>
            x
          </Box>
        </IconButton>
        {title}
        {content}
      </Box>
    </Backdrop>
    // <Dialog
    //   open={state.open}
    //   onClose={closePopup}
    //   aria-labelledby="alert-dialog-title"
    //   aria-describedby="alert-dialog-description"
    // >
    //   <DialogTitle id="alert-dialog-title">{state.title}</DialogTitle>
    //   <DialogContent>{state.content}</DialogContent>
    //   <DialogActions>{state.button}</DialogActions>
    // </Dialog>
  );
};

export default PopupProvider;
