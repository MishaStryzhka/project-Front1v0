// import { nanoid } from '@reduxjs/toolkit';
import Container from 'components/Container/Container';
import { Title } from 'components/FormLogin/FormLogin.styled';
import InputRadio from 'componentsReusable/InputRadio/InputRadio';
import MainContent from 'componentsReusable/MainContent/MainContent';
import PageContainer from 'componentsReusable/PageContainer/PageContainer';
import SideBarPage from 'componentsReusable/SideBarPage/SideBarPage';
import { directionListValue } from 'helpers/directionsList';
import { sortListValue } from 'helpers/sortList';
import { useSearchParams } from 'react-router-dom';

// const users = [
//   {
//     lastName: 'Qwerty',
//     firstName: 'Asd',
//     experienceYears: 3,
//     jobs: [
//       {
//         id: nanoid(),
//         name: 'Zxc',
//         cityArea: 'Kyiv',
//         address: '',
//         workSchedule: '',
//         receptionHours: ['', ''],
//       },
//     ],
//   },
//   {
//     lastName: 'Qwerty',
//     firstName: 'Asd',
//     experienceYears: 3,
//     jobs: [
//       {
//         id: nanoid(),
//         name: 'Zxc',
//         cityArea: 'Kyiv',
//         address: '',
//         workSchedule: '',
//         receptionHours: ['', ''],
//       },
//     ],
//   },
//   {
//     lastName: 'Qwerty',
//     firstName: 'Asd',
//     experienceYears: 3,
//     jobs: [
//       {
//         id: nanoid(),
//         name: 'Zxc',
//         cityArea: 'Kyiv',
//         address: '',
//         workSchedule: '',
//         receptionHours: ['', ''],
//       },
//     ],
//   },
//   {
//     lastName: 'Qwerty',
//     firstName: 'Asd',
//     experienceYears: 3,
//     jobs: [
//       {
//         id: nanoid(),
//         name: 'Zxc',
//         cityArea: 'Kyiv',
//         address: '',
//         workSchedule: '',
//         receptionHours: ['', ''],
//       },
//     ],
//   },
//   {
//     lastName: 'Qwerty',
//     firstName: 'Asd',
//     experienceYears: 3,
//     jobs: [
//       {
//         id: nanoid(),
//         name: 'Zxc',
//         cityArea: 'Kyiv',
//         address: '',
//         workSchedule: '',
//         receptionHours: ['', ''],
//       },
//     ],
//   },
//   {
//     lastName: 'Qwerty',
//     firstName: 'Asd',
//     experienceYears: 3,
//     jobs: [
//       {
//         id: nanoid(),
//         name: 'Zxc',
//         cityArea: 'Kyiv',
//         address: '',
//         workSchedule: '',
//         receptionHours: ['', ''],
//       },
//     ],
//   },
//   {
//     lastName: 'Qwerty',
//     firstName: 'Asd',
//     experienceYears: 3,
//     jobs: [
//       {
//         id: nanoid(),
//         name: 'Zxc',
//         cityArea: 'Kyiv',
//         address: '',
//         workSchedule: '',
//         receptionHours: ['', ''],
//       },
//     ],
//   },
//   {
//     lastName: 'Qwerty',
//     firstName: 'Asd',
//     experienceYears: 3,
//     jobs: [
//       {
//         id: nanoid(),
//         name: 'Zxc',
//         cityArea: 'Kyiv',
//         address: '',
//         workSchedule: '',
//         receptionHours: ['', ''],
//       },
//     ],
//   },
//   {
//     lastName: 'Qwerty',
//     firstName: 'Asd',
//     experienceYears: 3,
//     jobs: [
//       {
//         id: nanoid(),
//         name: 'Zxc',
//         cityArea: 'Kyiv',
//         address: '',
//         workSchedule: '',
//         receptionHours: ['', ''],
//       },
//     ],
//   },
//   {
//     lastName: 'Qwerty',
//     firstName: 'Asd',
//     experienceYears: 3,
//     jobs: [
//       {
//         id: nanoid(),
//         name: 'Zxc',
//         cityArea: 'Kyiv',
//         address: '',
//         workSchedule: '',
//         receptionHours: ['', ''],
//       },
//     ],
//   },
// ];

const DirectionPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  false && setSearchParams({ qwe: '' });

  const direction = searchParams.get('direction');

  return (
    <Container>
      <PageContainer>
        <SideBarPage>
          <InputRadio
            width="220"
            selectedValue={direction}
            values={directionListValue}
            name="direction"
          />
        </SideBarPage>
        <MainContent>
          <Title>{directionListValue[direction]}</Title>
          <p>Review</p>
          <InputRadio
            width="130"
            selectedValue={'fromAToZ'}
            values={sortListValue}
            name="direction"
            type="min"
          />
        </MainContent>
      </PageContainer>
    </Container>
  );
};

export default DirectionPage;
