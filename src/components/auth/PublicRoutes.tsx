import { Navigate, Outlet, useLocation } from 'react-router';
import { useAppSelector } from '@/store/hooks';
import { selectIsAuthenticated } from '@/store/slices/authSlice';

type LocationState = { from?: string } | null;

export const PublicRoutes = () => {
  const isAuth = useAppSelector(selectIsAuthenticated);
  const location = useLocation();
  const from = (location.state as LocationState)?.from ?? '/recipes';

  return isAuth ? <Navigate to={from} replace /> : <Outlet />;
};