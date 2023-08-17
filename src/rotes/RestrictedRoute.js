import { useAuth } from 'hooks';
// import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, userType } = useAuth();
  const location = useLocation();

  // useEffect(() => {
  //   console.log('userType', userType);
  //   console.log('isLoggedIn', isLoggedIn);
  // }, [userType, isLoggedIn]);

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
