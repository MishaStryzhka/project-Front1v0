import Container from 'componentsReusable/Container/Container';
import { Title } from 'components/FormLogin/FormLogin.styled';
import InputRadio from 'componentsReusable/InputRadio/InputRadio';
import MainContent from 'componentsReusable/MainContent/MainContent';
import PageContainer from 'componentsReusable/PageContainer/PageContainer';
import SideBarPage from 'componentsReusable/SideBarPage/SideBarPage';
import { problemListValue } from 'helpers/problemsList';
import { sortListValue } from 'helpers/sortList';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import {
  DoctorsAvatars,
  DoctorsBox,
  DoctorsItem,
  StyledInputRadio,
  StyledPagination,
} from '../DirectionPage/DirectionPage.styled';
import { nanoid } from '@reduxjs/toolkit';
import { quantityListValue } from 'helpers/quantityList';
import { locationListValue } from 'helpers/locationsList';
import { hoursOfWorkListValue } from 'helpers/hoursOfWorkList';
import { workExperienceListValue } from 'helpers/workExperienceList';

const users = [
  {
    id: nanoid(),
    lastName: 'Прізвище',
    firstName: 'Ім’я',
    experienceYears: 'Стаж роботи',
    jobs: [
      {
        id: nanoid(),
        name: 'Місце роботи',
        cityArea: 'Kyiv',
        address: '',
        workSchedule: '',
        receptionHours: ['', ''],
      },
    ],
  },
  {
    id: nanoid(),
    lastName: 'Прізвище',
    firstName: 'Ім’я',
    experienceYears: 'Стаж роботи',
    jobs: [
      {
        id: nanoid(),
        name: 'Місце роботи',
        cityArea: 'Kyiv',
        address: '',
        workSchedule: '',
        receptionHours: ['', ''],
      },
    ],
  },
  {
    id: nanoid(),
    lastName: 'Прізвище',
    firstName: 'Ім’я',
    experienceYears: 'Стаж роботи',
    jobs: [
      {
        id: nanoid(),
        name: 'Місце роботи',
        cityArea: 'Kyiv',
        address: '',
        workSchedule: '',
        receptionHours: ['', ''],
      },
    ],
  },
  {
    id: nanoid(),
    lastName: 'Прізвище',
    firstName: 'Ім’я',
    experienceYears: 'Стаж роботи',
    jobs: [
      {
        id: nanoid(),
        name: 'Місце роботи',
        cityArea: 'Kyiv',
        address: '',
        workSchedule: '',
        receptionHours: ['', ''],
      },
    ],
  },
  {
    id: nanoid(),
    lastName: 'Прізвище',
    firstName: 'Ім’я',
    experienceYears: 'Стаж роботи',
    jobs: [
      {
        id: nanoid(),
        name: 'Місце роботи',
        cityArea: 'Kyiv',
        address: '',
        workSchedule: '',
        receptionHours: ['', ''],
      },
    ],
  },
  {
    id: nanoid(),
    lastName: 'Прізвище',
    firstName: 'Ім’я',
    experienceYears: 'Стаж роботи',
    jobs: [
      {
        id: nanoid(),
        name: 'Місце роботи',
        cityArea: 'Kyiv',
        address: '',
        workSchedule: '',
        receptionHours: ['', ''],
      },
    ],
  },
  {
    id: nanoid(),
    lastName: 'Прізвище',
    firstName: 'Ім’я',
    experienceYears: 'Стаж роботи',
    jobs: [
      {
        id: nanoid(),
        name: 'Місце роботи',
        cityArea: 'Kyiv',
        address: '',
        workSchedule: '',
        receptionHours: ['', ''],
      },
    ],
  },
  {
    id: nanoid(),
    lastName: 'Прізвище',
    firstName: 'Ім’я',
    experienceYears: 'Стаж роботи',
    jobs: [
      {
        id: nanoid(),
        name: 'Місце роботи',
        cityArea: 'Kyiv',
        address: '',
        workSchedule: '',
        receptionHours: ['', ''],
      },
    ],
  },
  {
    id: nanoid(),
    lastName: 'Прізвище',
    firstName: 'Ім’я',
    experienceYears: 'Стаж роботи',
    jobs: [
      {
        id: nanoid(),
        name: 'Місце роботи',
        cityArea: 'Kyiv',
        address: '',
        workSchedule: '',
        receptionHours: ['', ''],
      },
    ],
  },
  {
    id: nanoid(),
    lastName: 'Прізвище',
    firstName: 'Ім’я',
    experienceYears: 'Стаж роботи',
    jobs: [
      {
        id: nanoid(),
        name: 'Місце роботи',
        cityArea: 'Kyiv',
        address: '',
        workSchedule: '',
        receptionHours: ['', ''],
      },
    ],
  },
];

const ProblemPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  false && setSearchParams({ qwe: '' });

  // const problem = searchParams.get('problem');
  // const sort = searchParams.get('sort');
  // const quantity = searchParams.get('quantity');
  // const location = searchParams.get('location');
  // const hoursOfWork = searchParams.get('hoursOfWork');
  // const workExperience = searchParams.get('workExperience');

  const problem = problemListValue.find(
    option => option.id === searchParams.get('problem')
  );
  const sort = sortListValue.find(
    option => option.id === searchParams.get('sort')
  );
  const quantity = quantityListValue.find(
    option => option.id === searchParams.get('quantity')
  );
  const location = locationListValue.find(
    option => option.id === searchParams.get('location')
  );
  const hoursOfWork = hoursOfWorkListValue.find(
    option => option.id === searchParams.get('hoursOfWork')
  );
  const workExperience = workExperienceListValue.find(
    option => option.id === searchParams.get('workExperience')
  );

  return (
    <Container>
      <Helmet>
        <title>{problem?.name}</title>
      </Helmet>
      <PageContainer>
        <SideBarPage>
          <InputRadio
            width="220"
            selectedValue={problem?.id}
            values={problemListValue}
            name="problem"
          />
          <InputRadio
            width="220"
            selectedValue={location?.id}
            defaultValue={'Місцерозташування'}
            values={locationListValue}
            name="location"
          />
          <InputRadio
            width="220"
            selectedValue={hoursOfWork?.id}
            defaultValue={'Години роботи'}
            values={hoursOfWorkListValue}
            name="hoursOfWork"
          />
          <InputRadio
            width="220"
            selectedValue={workExperience?.id}
            defaultValue={'Стаж роботи лікаря'}
            values={workExperienceListValue}
            name="workExperience"
          />
        </SideBarPage>

        <MainContent>
          <Title>{problem?.name}</Title>

          <p>Review</p>

          <StyledInputRadio
            width="150"
            selectedValue={sort?.id || 'fromAToZ'}
            values={sortListValue}
            name="sort"
            type="min"
          />

          <DoctorsBox>
            {users.map(user => (
              <DoctorsItem key={user.id}>
                <DoctorsAvatars alt="" />
                <p>{user.lastName}</p>
                <p>{user.firstName}</p>
                <p>{user.jobs[0].name}</p>
                <p>{user.experienceYears}</p>
              </DoctorsItem>
            ))}
          </DoctorsBox>
          <StyledInputRadio
            width="150"
            selectedValue={quantity?.id || '10'}
            values={quantityListValue}
            name="quantity"
            type="min"
          />

          <StyledPagination />
        </MainContent>
      </PageContainer>
    </Container>
  );
};

export default ProblemPage;
