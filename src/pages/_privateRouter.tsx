import { Navigate, Outlet } from "react-router-dom";
import { getAuthorization } from "src/lib/authorization";

const PrivateRouter = () => {
  const token = getAuthorization();
  
  return !token ? <Navigate to="/login" replace={true} /> : <Outlet />;
};

export default PrivateRouter;
