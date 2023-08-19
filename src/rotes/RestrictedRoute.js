import { useAuth } from 'hooks';
// import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, userType, user, token } = useAuth();
  const location = useLocation();

  console.log('isLoggedIn', isLoggedIn);
  console.log('userType', userType);
  console.log('user', user);
  console.log('token', token);

  console.log(
    'to',
    (location?.state?.redirectBack === '/user/' &&
      location?.state?.redirectBack + `${userType}`) ||
      location?.state?.redirectBack ||
      redirectTo
  );

  return isLoggedIn && userType ? (
    <Navigate
      to={
        (location?.state?.redirectBack === '/user/' &&
          location?.state?.redirectBack + `${userType}`) ||
        location?.state?.redirectBack ||
        redirectTo
      }
      state={{ filter: location?.state?.filter }}
    />
  ) : (
    Component
  );
};
