import Container from 'componentsReusable/Container/Container';
import PageContainer from 'componentsReusable/PageContainer/PageContainer';
import SideBarPage from 'componentsReusable/SideBarPage/SideBarPage';
import MainContent from 'componentsReusable/MainContent/MainContent';
import Title from 'componentsReusable/Titles/Title/Title';
import NavigationContainer from 'components/NavigationContainer/NavigationContainer';
import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './UserDoctorPage.styled';

const UserDoctorPage = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default UserDoctorPage;
