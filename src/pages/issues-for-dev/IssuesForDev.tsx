import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';

const IssuesForDev = () => {
  return (
    <Stack>
      <Typography variant="caption">Issues for dev</Typography>
      <Outlet />
    </Stack>
  );
};

export default IssuesForDev;
