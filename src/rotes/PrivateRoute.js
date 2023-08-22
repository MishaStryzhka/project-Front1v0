import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/',
  redirectBack,
}) => {
  const { isLoggedIn, isRefreshing, userType } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const location = useLocation();

  return shouldRedirect ? (
    <Navigate
      to={redirectTo}
      state={{
        redirectBack: location.pathname,
      }}
    />
  ) : userType ? (
    Component
  ) : (
    <Navigate to="/register/typeUser" />
  );
};
