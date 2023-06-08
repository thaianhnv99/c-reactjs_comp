import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "src/states/auth/hook";

const PrivateRouter = () => {
  const {
    state: { isAuth },
  } = useAuth();

  return false ? <Navigate to="/login" replace={true} /> : <Outlet />;
};

export default PrivateRouter;
