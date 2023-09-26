import { Helmet } from 'react-helmet';
import { nanoid } from '@reduxjs/toolkit';
import { Title } from 'components/FormLogin/FormLogin.styled';

import Container from 'componentsReusable/Container/Container';
import InputRadio from 'componentsReusable/Inputs/InputRadio/InputRadio';
import MainContent from 'componentsReusable/MainContent/MainContent';
import PageContainer from 'componentsReusable/PageContainer/PageContainer';
import SideBarPage from 'componentsReusable/SideBarPage/SideBarPage';

import {
  DoctorsAvatars,
  DoctorsBox,
  DoctorsItem,
  StyledInputRadio,
  StyledPagination,
} from './DirectionPage.styled';

import { directionListValue } from 'helpers/directionsList';
import { sortListValue } from 'helpers/sortList';
import { NavLink, useSearchParams } from 'react-router-dom';
import { quantityListValue } from 'helpers/quantityList';

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

const DirectionPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  false && setSearchParams({ qwe: '' });

  // const direction = searchParams.get('direction');
  // const sort = searchParams.get('sort');
  // const quantity = searchParams.get('quantity');

  const direction = directionListValue.find(
    option => option.id === searchParams.get('direction')
  );
  const sort = sortListValue.find(
    option => option.id === searchParams.get('sort')
  );
  const quantity = quantityListValue.find(
    option => option.id === searchParams.get('quantity')
  );

  const newSetSearchParams = (key, value) => {
    setSearchParams(pref => {
      const Query = {};
      for (const [key, value] of pref.entries()) {
        Query[key] = value;
      }

      return {
        ...Query,
        [key]: value,
      };
    });
  };

  return (
    <Container>
      <Helmet>
        <title>{directionListValue[direction]}</title>
      </Helmet>
      <PageContainer>
        <SideBarPage>
          <InputRadio
            width="220"
            selectedValue={direction?.id}
            values={directionListValue}
            name="direction"
            onChange={value => newSetSearchParams('direction', value)}
          />
        </SideBarPage>

        <MainContent>
          <Title>{direction?.name}</Title>

          <p>Review</p>

          <StyledInputRadio
            width="150"
            selectedValue={sort?.id || 'fromAToZ'}
            values={sortListValue}
            name="sort"
            onChange={value => newSetSearchParams('sort', value)}
            styledType="min"
          />
          <DoctorsBox>
            {users.map(user => (
              <DoctorsItem key={user?.id}>
                <NavLink to={`/user/${user?.id}`}>
                  <DoctorsAvatars alt="" />
                  <p>{user.lastName}</p>
                  <p>{user.firstName}</p>
                  <p>{user.jobs[0].name}</p>
                  <p>{user.experienceYears}</p>
                </NavLink>
              </DoctorsItem>
            ))}
          </DoctorsBox>
          <StyledInputRadio
            width="150"
            selectedValue={quantity?.id || '10'}
            values={quantityListValue}
            name="quantity"
            onChange={value => newSetSearchParams('quantity', value)}
            styledType="min"
          />

          <StyledPagination />
        </MainContent>
      </PageContainer>
    </Container>
  );
};

export default DirectionPage;
