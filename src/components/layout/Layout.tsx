import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import PopupProvider from './PopupProvider';
import { useIdleSession } from 'src/hooks/idleSession/useIdleSession';

const Layout = () => {
  useIdleSession();
  return (
    <>
      <Header />
      <PopupProvider />
      <Outlet />
    </>
  );
};

export default Layout;
