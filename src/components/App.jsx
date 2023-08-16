import { useEffect, lazy, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

import { RestrictedRoute } from 'rotes/RestrictedRoute';
import { PrivateRoute } from 'rotes/PrivateRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ProblemsPage from 'pages/mainPages/ProblemsPage';
import SpecialistDoctorsPage from 'pages/mainPages/SpecialistDoctorsPage';

const RegisterPage = lazy(() => import('pages/authPages/RegisterPage'));
const LoginPage = lazy(() => import('pages/authPages/LoginPage'));
const MainPage = lazy(() => import('pages/mainPages/MainPage'));
const UserPage = lazy(() => import('pages/secondaryPages/UserPage/UserPage'));
const NotFoundPage = lazy(() => import('pages/mainPages/NotFoundPage'));

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const dispatch = useDispatch();
  const { isRefreshing, userType } = useAuth();

  useEffect(() => {
    setCurrentTheme('light');
  }, []);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <ThemeProvider theme={theme[currentTheme]}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route
            path="/specialistDoctors"
            element={<SpecialistDoctorsPage />}
          />
          <Route path="/problems" element={<ProblemsPage />} />

          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo={`/user/${userType}`}
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo={`/user/${userType}`}
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/register/typeUser"
            element={
              <RestrictedRoute
                redirectTo={`/user/${userType}`}
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute
                redirectTo="/login"
                redirectBack={`/user/`}
                component={<UserPage />}
              />
            }
          />
          <Route
            path="/user/:userType"
            element={
              <PrivateRoute
                redirectTo="/login"
                redirectBack={`/user/`}
                component={<UserPage />}
              />
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
