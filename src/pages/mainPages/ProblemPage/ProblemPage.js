import Container from 'componentsReusable/Container/Container';
import InputRadio from 'componentsReusable/Inputs/InputRadio/InputRadio';
import MainContent from 'componentsReusable/MainContent/MainContent';
import PageContainer from 'componentsReusable/PageContainer/PageContainer';
import SideBarPage from 'componentsReusable/SideBarPage/SideBarPage';
import { problemsListValue } from 'helpers/problemsList';
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
import { quantityListValue } from 'helpers/quantityList';
import { locationListValue } from 'helpers/locationsList';
import { hoursOfWorkListValue } from 'helpers/hoursOfWorkList';
import { workExperienceListValue } from 'helpers/workExperienceList';
import Title from 'componentsReusable/Titles/Title/Title';
import Image from 'images/main/Rectangle.jpg';
import {
  DescriptionDoctor,
  DescriptionProblem,
  ImageProblem,
  WrapperAboutProblem,
} from './ProblemPage.styled';
import { useEffect, useState } from 'react';
import { getDoctorsByProblem } from 'sirvices/doctors';

const ProblemPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [users, setUsers] = useState([]);

  const page = searchParams.get('page') || 1;

  let targetId = searchParams.get('problem');
  let problem = null;

  for (let i = 0; i < problemsListValue.length; i++) {
    let category = problemsListValue[i];
    let problems = category.problems;

    for (let j = 0; j < problems.length; j++) {
      if (problems[j].id === targetId) {
        problem = problems[j];
        break;
      }
    }

    if (problem) {
      break;
    }
  }

  // console.log('problem', problem);

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

  useEffect(() => {
    getDoctorsByProblem({
      problem: problem?.id,
      cityArea: location?.name,
      hoursOfWork: hoursOfWork?.id,
      experienceYears: workExperience?.id,
      limit: quantity,
      sort,
      page,
    })
      .then(result => {
        // console.log('result', result);
        setUsers(result.data);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, [hoursOfWork, location, page, problem, quantity, sort, workExperience]);

  return (
    <Container>
      <Helmet>
        <title>{problem?.name_ua}</title>
      </Helmet>
      <PageContainer>
        <SideBarPage>
          {/* <InputRadio
            width="220"
            selectedValue={problem?.id}
            values={problemsListValue}
            name="problem"
            onChange={value => newSetSearchParams('problem', value)}
          /> */}
          <InputRadio
            width="280"
            selectedValue={location?.id}
            defaultValue={'Місцерозташування'}
            values={locationListValue}
            name="location"
            onChange={value => newSetSearchParams('location', value)}
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
            <Title>{problem?.name_ua}</Title>
            <WrapperAboutProblem>
              <ImageProblem src={Image} alt="Опис зображення" />
              <DescriptionProblem>{problem.description}</DescriptionProblem>
            </WrapperAboutProblem>
            <DescriptionProblem>{problem.prevention}</DescriptionProblem>
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
                return (
                  <DoctorsItem key={user._id}>
                    <DoctorsAvatars alt="" src={user.avatar} />
                    <DescriptionDoctor>
                      <div>
                        <p>{user.lastName}</p>
                        <p>{user.firstName}</p>
                      </div>
                      {user.jobs.map(job => {
                        console.log('job', job.receptionHours);
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

export default ProblemPage;
