/* eslint-disable @typescript-eslint/no-unused-vars */
import Divider from '@mui/material/Divider';
import LinkUI from '@mui/material/Link';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import IconUI from 'src/icons/IconUI';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        border: 'none',
      }}
    >
      <Container sx={{ px: 2 }}>
        <Toolbar
          disableGutters
          sx={{
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            lineHeight: '1.25rem',
            fontFamily: 'initial',
          }}
        >
          <Box>
            <Link to="/">
              <IconUI name="icon_logo" size={54} />
            </Link>
          </Box>
          <Stack direction="row" alignItems="center">
            <GroupLinkMenu />
            <Divider sx={{ color: '#d5d5d5' }}>{`//`}</Divider>
            <Profile />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const GroupLinkMenu = () => {
  return (
    <>
      <LinkUI
        to="#"
        underline="none"
        color="inherit"
        component={Link}
        sx={{
          p: '.25rem .75rem',
          borderRadius: '9999px',
          '&:hover': {
            color: 'rgb(29 78 216)',
            bgcolor: '#eff6ff80',
          },
        }}
      >
        About
      </LinkUI>
      <LinkUI
        to="#"
        underline="none"
        color="inherit"
        component={Link}
        sx={{
          p: '.25rem .75rem',
          borderRadius: '9999px',
          '&:hover': {
            color: 'rgb(29 78 216)',
            bgcolor: '#eff6ff80',
          },
        }}
      >
        Blog
      </LinkUI>
    </>
  );
};
