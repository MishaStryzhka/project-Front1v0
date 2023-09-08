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
import AccountData from './AccountData/AccountData';
import PersonalData from './PersonalData/PersonalData';
import DirectionWork from './DirectionWork/DirectionWork';
import Communication from './Communication/Communication';
import DirectionPage from 'pages/mainPages/DirectionPage/DirectionPage';
import ProblemPage from 'pages/mainPages/ProblemPage/ProblemPage';

const RegisterPage = lazy(() => import('pages/authPages/RegisterPage'));
const LoginPage = lazy(() => import('pages/authPages/LoginPage'));
const MainPage = lazy(() => import('pages/mainPages/MainPage'));
const NotFoundPage = lazy(() => import('pages/mainPages/NotFoundPage'));

const ProblemsListPage = lazy(() => import('pages/mainPages/ProblemsPage'));
const SpecialistDoctorsPage = lazy(() =>
  import('pages/mainPages/SpecialistDoctorsPage/SpecialistDoctorsPage')
);
// const AccountData = lazy(() => import('./AccountData/AccountData'));
// const PersonalData = lazy(() => import('./PersonalData/PersonalData'));
// const DirectionWork = lazy(() => import('./DirectionWork/DirectionWork'));
// const Communication = lazy(() => import('./Communication/Communication'));

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const dispatch = useDispatch();
  const { isRefreshing, token, userType } = useAuth();

  currentTheme === null && setCurrentTheme('light');

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
          <Route path="/directionsList" element={<SpecialistDoctorsPage />} />
          <Route path="/direction" element={<DirectionPage />} />
          <Route path="/problemsList" element={<ProblemsListPage />} />
          <Route path="/problem" element={<ProblemPage />} />

          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo={`/${
                  userType === 'doctor' ? 'doctor/accountData' : 'patient'
                }/`}
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo={`/${
                  userType === 'doctor' ? 'doctor/accountData' : 'patient'
                }/`}
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/register/typeUser"
            element={
              <RestrictedRoute
                redirectTo={`/${
                  userType === 'doctor' ? 'doctor/accountData' : 'patient'
                }/`}
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/patient"
            element={
              <PrivateRoute redirectTo="/login" component={<PatientPage />} />
            }
          />
          <Route
            path="/doctor"
            element={
              <PrivateRoute redirectTo="/login" component={<DoctorPage />} />
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
