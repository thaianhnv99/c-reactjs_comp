import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import PopupProvider from './PopupProvider';

const Layout = () => {
  return (
    <>
      <Header />
      <PopupProvider />
      <Outlet />
    </>
  );
};

export default Layout;
