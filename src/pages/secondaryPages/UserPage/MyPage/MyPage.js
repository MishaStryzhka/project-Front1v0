import Container from 'componentsReusable/Container/Container';
import SideBarPage from 'componentsReusable/SideBarPage/SideBarPage';
import { StyledNavLink } from './MyPage.styled';
import { useAuth } from 'hooks';
import { Outlet } from 'react-router-dom';
import {
  MainContainer,
  StyledPageContainer,
} from '../UserPage/UserPage.styled';
import HeaderPage from 'componentsReusable/HeaderPage/HeaderPage';

const MyPage = () => {
  const { userType } = useAuth();

  return (
    <Container>
      <StyledPageContainer>
        <HeaderPage
          title={`Особистий кабінет ${
            userType === 'doctor' ? 'лікаря' : 'пацієнта'
          }`}
        />
        <MainContainer style={{ display: 'flex' }}>
          <SideBarPage>
            <StyledNavLink to="accountData">Дані акаунту</StyledNavLink>
            <StyledNavLink to="personalData">Особисті дані</StyledNavLink>
            {userType === 'doctor' && (
              <StyledNavLink to="directionWork">Напрямок роботи</StyledNavLink>
            )}
            {userType === 'doctor' && (
              <StyledNavLink to="communication">Комунікація</StyledNavLink>
            )}
            <StyledNavLink to="chat">Чат</StyledNavLink>
          </SideBarPage>
          <Outlet />
        </MainContainer>
      </StyledPageContainer>
    </Container>
  );
};

export default MyPage;
// const { id } = useParams();
//   console.log('id', id);

//   const user = {
//     avatarUrl: '',
//     lastName: 'Старшинова',
//     firstName: 'Лідія',
//     patronymic: 'Олександрівна',
//     phones: ['+380960000000'],
//     experienceYears: '17 років',
//     educations: [
//       {
//         id: nanoid(),
//         name: 'Харківський національний медичний університет',
//         years: ['2001', '2006'],
//       },
//     ],
//     paymentMethods: [],
//     jobs: [
//       {
//         id: nanoid(),
//         name: 'Міська поліклініка №4',
//         cityArea: 'Харків',
//         address: 'пр. Науки, 4',
//         workSchedule: 'кожного парного дня, пн-сб',
//         receptionHours: ['09:00', '19:00'],
//       },
//       {
//         id: nanoid(),
//         name: 'Стоматологічний кабінет “Сузір’я”',
//         cityArea: 'Харків',
//         address: 'пр. Науки, 35',
//         workSchedule: 'кожного непарного дня, пн-сб',
//         receptionHours: ['09:00', '19:00'],
//       },
//     ],
//     sertificates: [{ id: nanoid(), file: null }],
//     directionOfWork: [],
//     problemsItSolves: [],
//     communicationWithDoctor: [],
//     howApplicationsAreReceived: [],
//   };

//   console.log('user', user);

//   return <p>MyPage</p>;
