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
import DoctorPage from 'pages/secondaryPages/UserPage/DoctorPage';
import PatientPage from 'pages/secondaryPages/UserPage/PatientPage';

const RegisterPage = lazy(() => import('pages/authPages/RegisterPage'));
const LoginPage = lazy(() => import('pages/authPages/LoginPage'));
const MainPage = lazy(() => import('pages/mainPages/MainPage'));
// const UserPage = lazy(() => import('pages/secondaryPages/UserPage/UserPage'));
const NotFoundPage = lazy(() => import('pages/mainPages/NotFoundPage'));

const ProblemsPage = lazy(() => import('pages/mainPages/ProblemsPage'));
const SpecialistDoctorsPage = lazy(() =>
  import('pages/mainPages/SpecialistDoctorsPage')
);
const AccountData = lazy(() => import('./AccountData/AccountData'));
const PersonalData = lazy(() => import('./PersonalData/PersonalData'));
const DirectionWork = lazy(() => import('./DirectionWork/DirectionWork'));
const Communication = lazy(() => import('./Communication/Communication'));

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const dispatch = useDispatch();
  const { isRefreshing, token, userType } = useAuth();

  console.log('userType', userType);

  useEffect(() => {
    setCurrentTheme('light');
  }, []);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, token]);

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
                redirectTo={`/${userType}${
                  userType === 'doctor' && '/accountData'
                }/`}
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo={`/${userType}${
                  userType === 'doctor' && '/accountData'
                }/`}
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/register/typeUser"
            element={
              <RestrictedRoute
                redirectTo={`/${userType}${
                  userType === 'doctor' && '/accountData'
                }/`}
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/patient"
            element={
              <PrivateRoute
                redirectTo="/login"
                redirectBack={`/${userType}${
                  userType === 'doctor' && '/accountData'
                }/`}
                component={<PatientPage />}
              />
            }
          />
          <Route
            path="/doctor"
            element={
              <PrivateRoute
                redirectTo="/login"
                redirectBack={`/${userType}${
                  userType === 'doctor' && '/accountData'
                }/`}
                component={<DoctorPage />}
              />
            }
          >
            <Route path="accountData/" element={<AccountData />} />
            <Route path="personalData/" element={<PersonalData />} />
            <Route path="directionWork/" element={<DirectionWork />} />
            <Route path="communication/" element={<Communication />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
