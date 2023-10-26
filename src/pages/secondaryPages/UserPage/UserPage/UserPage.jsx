import Container from 'componentsReusable/Container/Container';
import MainContent from 'componentsReusable/MainContent/MainContent';
import SideBarPage from 'componentsReusable/SideBarPage/SideBarPage';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header, MainContainer, StyledPageContainer } from './UserPage.styled';
import Title from 'componentsReusable/Titles/Title/Title';
import { useAuth } from 'hooks';

export const UserPage = () => {
  const auth = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const user = location.state.user || auth.user;

  return (
    <Container>
      <StyledPageContainer>
        <Header>
          <button type="button" onClick={() => navigate(-1)}>
            Назад
          </button>
          <Title>{`${user.lastName} ${user.firstName} ${user.patronymic}`}</Title>
        </Header>
        <MainContainer style={{ display: 'flex' }}>
          <SideBarPage>
            <p>Side Bar</p>
          </SideBarPage>
          <MainContent width="900px" $padding="40px">
            <p>Main content</p>
          </MainContent>
        </MainContainer>
      </StyledPageContainer>
    </Container>
  );
};

export default UserPage;
