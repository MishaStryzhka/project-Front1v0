import Container from 'componentsReusable/Container/Container';
import MainContent from 'componentsReusable/MainContent/MainContent';
import SideBarPage from 'componentsReusable/SideBarPage/SideBarPage';
import { useLocation, useParams } from 'react-router-dom';
import { MainContainer, StyledPageContainer } from './UserPage.styled';
import { useAuth } from 'hooks';
import HeaderPage from 'componentsReusable/HeaderPage/HeaderPage';
import DoctorCard from 'components/DoctorCard/DoctorCard';
import DoctorSideBar from 'components/DoctorSideBar/DoctorSideBar';
import { getUsersById } from 'sirvices/users';
import { useState } from 'react';
import Image from 'images/Group.png';
import Loader from 'components/Loader/Loader';

export const UserPage = () => {
  const [user, setUser] = useState(useAuth().user);
  const { id } = useParams();
  const location = useLocation();

  if (id !== user?.userID) {
    getUsersById(id)
      .then(data => {
        setUser(data.user);
      })
      .catch(error => console.log('error', error));
  }

  if (location?.state?.user) {
    setUser(location?.state?.user);
  }

  return (
    <Container>
      <StyledPageContainer>
        {user ? (
          <>
            <HeaderPage
              title={`${user.lastName} ${user.firstName} ${user.patronymic}`}
            />
            <MainContainer style={{ display: 'flex' }}>
              <SideBarPage>
                <DoctorSideBar user={user} />
              </SideBarPage>
              <MainContent width="900px" $padding="40px">
                <DoctorCard user={user} />
              </MainContent>
            </MainContainer>
          </>
        ) : (
          <Loader height={150} width={150} $urlImage={Image} />
        )}
      </StyledPageContainer>
    </Container>
  );
};

export default UserPage;
