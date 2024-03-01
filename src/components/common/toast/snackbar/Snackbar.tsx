import { type ReactNode } from 'react';
import { type DialogPositions } from '../constant';
import { Box } from '@mui/material';

export type SnackbarProps = {
  open: boolean;
  text: string;
  position?: DialogPositions;
  leftImage?: ReactNode;
};

const SnackBar = ({ open, text }: SnackbarProps) => {
  return (
    <Box
      sx={{
        opacity: open ? 1 : 0,
        backgroundColor: 'red',
        position: 'absolute',
        top: '70px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '500px',
      }}
    >
      {text}
    </Box>
  );
};

export default SnackBar;
