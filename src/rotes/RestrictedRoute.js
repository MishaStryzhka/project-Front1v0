import { useAuth } from 'hooks';
// import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, userType } = useAuth();
  const location = useLocation();

  console.log('isLoggedIn', isLoggedIn);
  console.log('userType', userType);

  console.log(
    "location?.state?.redirectBack === '/user/'",
    location?.state?.redirectBack === '/user/'
  );

  console.log(
    'location?.state?.redirectBack + {userType}',
    location?.state?.redirectBack + `${userType}`
  );

  console.log('location?.state?.redirectBack', location?.state?.redirectBack);

  console.log('redirectTo', redirectTo);

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
