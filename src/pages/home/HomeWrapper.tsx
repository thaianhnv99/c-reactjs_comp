import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { type ReactNode } from 'react';

type HomeWrapperProps = {
  children: ReactNode;
  title: string;
};

const ItemUI = ({ title, children }: { title: string; children?: ReactNode }) => {
  return (
    <Box>
      <Typography>{title}</Typography>
      {children}
    </Box>
  );
};

const HomeWrapper = ({ children, title }: HomeWrapperProps) => {
  return (
    <Box>
      <Typography variant="h3">{title}</Typography>
      <Box>{children}</Box>
    </Box>
  );
};

HomeWrapper.Item = ItemUI;

export default HomeWrapper;
