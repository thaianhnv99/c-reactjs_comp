import Box from '@mui/material/Box';
import SideBar from './SideBar';
import { type PropsWithChildren, type ReactNode } from 'react';
import { menu } from 'src/shared/utils/constant';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

type MainProps = {
  headerTitle?: ReactNode;
};

export function Main({ children, headerTitle }: PropsWithChildren<MainProps>) {
  return (
    <Box component="main">
      <Box mt={6}>
        <Container
          sx={{
            minHeight: 'calc(100vh)',
            px: 2,
          }}
        >
          {headerTitle}
          <Grid container>
            <Grid item xs={12} sm={8}>
              {children}
            </Grid>
            <Grid
              item
              zeroMinWidth
              xs={12}
              sm={4}
              sx={(theme) => ({
                display: 'none',
                [theme.breakpoints.up('sm')]: {
                  display: 'flex',
                },
              })}
            >
              <SideBar menu={menu} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
