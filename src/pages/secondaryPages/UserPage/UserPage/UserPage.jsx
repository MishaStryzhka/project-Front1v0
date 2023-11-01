import Container from 'componentsReusable/Container/Container';
import MainContent from 'componentsReusable/MainContent/MainContent';
import SideBarPage from 'componentsReusable/SideBarPage/SideBarPage';
import { useLocation } from 'react-router-dom';
import { MainContainer, StyledPageContainer } from './UserPage.styled';
import { useAuth } from 'hooks';
import HeaderPage from 'componentsReusable/HeaderPage/HeaderPage';
import DoctorCard from 'components/DoctorCard/DoctorCard';

export const UserPage = () => {
  let { user } = useAuth();

  const location = useLocation();

  if (location?.state?.user) {
    user = location?.state?.user;
  }

  return (
    <Container>
      <StyledPageContainer>
        <HeaderPage
          title={`${user.lastName} ${user.firstName} ${user.patronymic}`}
        />
        <MainContainer style={{ display: 'flex' }}>
          <SideBarPage>
            <p>Side Bar</p>
          </SideBarPage>
          <MainContent width="900px" $padding="40px">
           <DoctorCard/>
          </MainContent>
        </MainContainer>
      </StyledPageContainer>
    </Container>
  );
};

export default UserPage;
