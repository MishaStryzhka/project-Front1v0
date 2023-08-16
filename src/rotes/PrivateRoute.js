import { Navigate, useSearchParams } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/',
  redirectBack,
}) => {
  const [searchParams] = useSearchParams();
  const { isLoggedIn, isRefreshing, userType } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    <Navigate
      to={redirectTo}
      state={{ filter: searchParams.get('filter'), redirectBack }}
    />
  ) : userType ? (
    Component
  ) : (
    <Navigate to="/register/typeUser" />
  );
};
