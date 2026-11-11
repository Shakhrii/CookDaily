import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/store/slices/authSlice";
import { Navigate, Outlet, useLocation } from "react-router";

export const ProtectedRoutes = () => {
  const isAuth = useSelector(selectIsAuthenticated);
  const location = useLocation();

  return isAuth ? <Outlet /> : <Navigate to="/login" state={{ from: location.pathname }} replace />;
};