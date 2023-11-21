import { Helmet } from 'react-helmet';
import { nanoid } from '@reduxjs/toolkit';

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
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { quantityListValue } from 'helpers/quantityList';
import Title from 'componentsReusable/Titles/Title/Title';
import { districtsListValue } from 'helpers/districtsList';
import { hoursOfWorkListValue } from 'helpers/hoursOfWorkList';
import { workExperienceListValue } from 'helpers/workExperienceList';
import {
  DescriptionDoctor,
  DescriptionProblem,
  ImageProblem,
  WrapperAboutProblem,
} from '../ProblemPage/ProblemPage.styled';
import Image from 'images/main/Rectangle.jpg';

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

  const location = useLocation();

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
  const district = districtsListValue.find(
    option => option.id === searchParams.get('district')
  );
  const hoursOfWork = hoursOfWorkListValue.find(
    option => option.id === searchParams.get('hoursOfWork')
  );
  const workExperience = workExperienceListValue.find(
    option => option.id === searchParams.get('workExperience')
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

  console.log('direction', direction);

  console.log('directionListValue[direction]', directionListValue[direction]);

  return (
    <Container>
      <Helmet>
        <title>{direction?.name_ua}</title>
      </Helmet>
      <PageContainer>
        <SideBarPage>
          <InputRadio
            width="280"
            selectedValue={district?.id}
            defaultValue={'Місцерозташування'}
            values={districtsListValue}
            name="district"
            onChange={value => newSetSearchParams('district', value)}
          />
          <InputRadio
            width="280"
            selectedValue={hoursOfWork?.id}
            defaultValue={'Години роботи'}
            values={hoursOfWorkListValue}
            name="hoursOfWork"
            onChange={value => newSetSearchParams('hoursOfWork', value)}
          />
          <InputRadio
            width="280"
            selectedValue={workExperience?.id}
            defaultValue={'Стаж роботи лікаря'}
            values={workExperienceListValue}
            name="workExperience"
            onChange={value => newSetSearchParams('workExperience', value)}
          />
        </SideBarPage>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <MainContent width="900px" $padding="40px" style={{ gap: '40px' }}>
            <Title>{direction?.name_ua}</Title>
            <WrapperAboutProblem>
              <ImageProblem src={Image} alt="Опис зображення" />
              <DescriptionProblem>{direction.description}</DescriptionProblem>
            </WrapperAboutProblem>
            {/* <DescriptionProblem>{direction.prevention}</DescriptionProblem> */}
          </MainContent>

          <MainContent width="900px" $padding="40px" style={{ gap: '20px' }}>
            <StyledInputRadio
              width="150"
              selectedValue={sort?.id || 'fromAToZ'}
              values={sortListValue}
              name="sort"
              onChange={value => newSetSearchParams('sort', value)}
              styledType="min"
            />

            <DoctorsBox>
              {users.map(user => {
                // console.log('location', location);

                return (
                  <DoctorsItem key={user._id}>
                    <NavLink
                      to={`/in/${user?._id}`}
                      state={{ back: `${location.pathname}${location.search}` }}
                    >
                      <DoctorsAvatars alt="" src={user.avatar} />
                      <DescriptionDoctor>
                        <div>
                          <p>{user.lastName}</p>
                          <p>{user.firstName}</p>
                        </div>
                        {user.jobs.map(job => {
                          return (
                            <div
                              key={user.jobs.findIndex(
                                option => option.name === job.name
                              )}
                            >
                              <p>{job.name}</p>
                              <p>
                                {job.receptionHours[0].begin} -{' '}
                                {job.receptionHours[0].end}
                              </p>
                            </div>
                          );
                        })}
                        <p>Стаж: {user.experienceYears}</p>
                      </DescriptionDoctor>
                    </NavLink>
                  </DoctorsItem>
                );
              })}
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
        </div>
      </PageContainer>
    </Container>
  );
};

export default DirectionPage;
