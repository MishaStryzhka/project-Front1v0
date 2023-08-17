import { Outlet } from 'react-router-dom';
import {
  MainContent,
  SideBarDoctor,
  StyledDoctorPageContainer,
  StyledNavLink,
} from './DoctorPageContainer.styled';
import { Title } from 'components/FormLogin/FormLogin.styled';
import NavigationContainer from 'components/NavigationContainer/NavigationContainer';

const DoctorPageContainer = () => {
  return (
    <StyledDoctorPageContainer>
      <SideBarDoctor>
        <StyledNavLink to="accountData">Дані акаунту</StyledNavLink>
        <StyledNavLink to="personalData">Особисті дані</StyledNavLink>
        <StyledNavLink to="directionWork">Напрямок роботи</StyledNavLink>
        <StyledNavLink to="communication">Комунікація</StyledNavLink>
      </SideBarDoctor>
      <MainContent>
        <Title>Особистий кабінет лікаря</Title>

        <NavigationContainer />

        <Outlet />
      </MainContent>
    </StyledDoctorPageContainer>
  );
};

export default DoctorPageContainer;
