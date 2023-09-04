import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './DoctorPageContainer.styled';
import { Title } from 'components/FormLogin/FormLogin.styled';
import NavigationContainer from 'components/NavigationContainer/NavigationContainer';
import PageContainer from 'componentsReusable/PageContainer/PageContainer';
import SideBarPage from 'componentsReusable/SideBarPage/SideBarPage';
import MainContent from 'componentsReusable/MainContent/MainContent';

const DoctorPageContainer = () => {
  return (
    <PageContainer>
      <SideBarPage>
        <StyledNavLink to="accountData">Дані акаунту</StyledNavLink>
        <StyledNavLink to="personalData">Особисті дані</StyledNavLink>
        <StyledNavLink to="directionWork">Напрямок роботи</StyledNavLink>
        <StyledNavLink to="communication">Комунікація</StyledNavLink>
      </SideBarPage>
      <MainContent>
        <Title>Особистий кабінет лікаря</Title>

        <NavigationContainer />

        <Outlet />
      </MainContent>
    </PageContainer>
  );
};

export default DoctorPageContainer;
