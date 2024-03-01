import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'src/states/auth/hook';

const PrivateRouter = () => {
  const {
    state: { isAuth },
  } = useAuth();

  console.log('page private and check auth');

  return !isAuth ? <Navigate to="/login" replace={true} /> : <Outlet />;
};

export default PrivateRouter;
