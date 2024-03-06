import { Container } from '@mui/material';
import { AppBox } from 'src/components/base';
import SideBar from './SideBar';
import { type ReactNode } from 'react';
import { menu } from 'src/shared/utils/constant';

type MainProps = {
  children: ReactNode;
};

export function Main({ children }: MainProps) {
  return (
    <Container
      sx={{
        display: 'flex',
        minHeight: 'calc(100vh)',
      }}
    >
      <AppBox flex={1} p={2}>
        {children}
      </AppBox>
      <SideBar menu={menu} />
    </Container>
  );
}
