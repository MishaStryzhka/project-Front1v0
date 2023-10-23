import { Formik } from 'formik';
import {
  CategoryTitle,
  CheckboxField,
  CheckboxInputItem,
  CheckboxLabel,
  CheckboxProblemItem,
  DirectionOfWorkLabel,
  InputPrice,
  ListDirection,
  ListProblems,
  ListProblemsCategories,
  ProblemsItSolvesLabel,
  StyledLegend,
} from './DirectionWork.styled';
import Checkbox from 'components/Checkbox/Checkbox';
import Form from 'components/Forms/Form/Form';
import MainContent from 'componentsReusable/MainContent/MainContent';
import Title from 'componentsReusable/Titles/Title/Title';
import { useAuth } from 'hooks';
import {
  Notify,
  StyledButtonWrapper,
} from 'components/PersonalData/PersonalData.styled';
import SecondaryButton from 'componentsReusable/Buttons/SecondaryButton/SecondaryButton';
import IconDone from 'images/icons/IconDone';
import { directionListValue } from 'helpers/directionsList';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/auth/operations';
import { resetError, resetResponse } from 'redux/auth/slice';
import { problemsListValue } from 'helpers/problemsList';
import { validationDoctorDirectionWork } from 'schemas';
import { TextError } from 'components/Forms/FormLogin/FormLogin.styled';

const DirectionWork = () => {
  const dispatch = useDispatch();
  let { user, response, userType, error } = useAuth();

  setTimeout(() => {
    response && dispatch(resetResponse(null));
  }, 2000);

  setTimeout(() => {
    error && dispatch(resetError(null));
  }, 2000);

  const onSubmit = value => {
    console.log('value', value);

    dispatch(updateUserInfo(value));
  };

  const handlePublish = () => {
    console.log('handlePublish', handlePublish);
  };

  return (
    <div>
      <MainContent width={'800px'}>
        <Title>
          Особистий кабінет {userType === 'doctor' ? 'лікаря' : 'пацієнта'}
        </Title>
        <Formik
          initialValues={{
            directionsOfWork: user.directionsOfWork || [],
            problemsItSolves: user.problemsItSolves || {},
          }}
          validationSchema={validationDoctorDirectionWork}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            setFieldValue,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            console.log('errors', errors);
            console.log('touched', touched);
            console.log('values', values);

            return (
              <Form
                id="formDirectionWork"
                onSubmit={handleSubmit}
                isRequiredFields
                handlePublish={handlePublish}
              >
                <DirectionOfWorkLabel>
                  <StyledLegend>
                    Напрямки роботи <span>*</span>
                  </StyledLegend>

                  <ListDirection>
                    {directionListValue.map(direction => {
                      return (
                        <CheckboxInputItem key={direction.id}>
                          <CheckboxField
                            type="checkbox"
                            id={direction.id}
                            name="directionsOfWork"
                            value={direction.id}
                            component={Checkbox}
                            onChange={handleChange}
                          />
                          <CheckboxLabel htmlFor={direction.id}>
                            {direction.name}
                          </CheckboxLabel>
                        </CheckboxInputItem>
                      );
                    })}
                  </ListDirection>
                  {errors.directionsOfWork && (
                    <TextError>{errors.directionsOfWork}</TextError>
                  )}
                </DirectionOfWorkLabel>

                <ProblemsItSolvesLabel>
                  <StyledLegend>
                    Проблеми, які вирішує <span>*</span>
                  </StyledLegend>
                  <ListProblemsCategories>
                    {problemsListValue.map(category => {
                      return (
                        <li key={category.id}>
                          <CategoryTitle>{category.category}</CategoryTitle>
                          <ListProblems>
                            {category.problems.map(problem => {
                              return (
                                <CheckboxProblemItem key={problem.id}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '20px',
                                    }}
                                  >
                                    <CheckboxField
                                      type="checkbox"
                                      id={problem.id}
                                      name="problemsItSolves"
                                      value={problem.id}
                                      component={Checkbox}
                                      onChange={e => {
                                        const newProblemsItSolves = {
                                          ...values.problemsItSolves,
                                        };

                                        if (problem.id in newProblemsItSolves) {
                                          delete newProblemsItSolves[
                                            problem.id
                                          ];
                                        } else {
                                          newProblemsItSolves[problem.id] = '';
                                        }

                                        setFieldValue(
                                          'problemsItSolves',
                                          newProblemsItSolves
                                        );
                                      }}
                                    />
                                    <CheckboxLabel htmlFor={problem.id}>
                                      {problem.name_ua}
                                    </CheckboxLabel>
                                  </div>
                                  <InputPrice
                                    width="150px"
                                    type="number"
                                    placeholder="Ціна від, грн"
                                    name="problemsItSolves"
                                    disabled={
                                      !(problem.id in values.problemsItSolves)
                                    }
                                    value={
                                      values.problemsItSolves[problem.id] || ''
                                    }
                                    onChange={e => {
                                      setFieldValue('problemsItSolves', {
                                        ...values.problemsItSolves,
                                        [problem.id]: Number(
                                          e.currentTarget.value
                                        ),
                                      });
                                    }}
                                    onBlur={handleBlur}
                                  />
                                </CheckboxProblemItem>
                              );
                            })}
                          </ListProblems>
                        </li>
                      );
                    })}
                  </ListProblemsCategories>
                  {errors.problemsItSolves && (
                    <TextError>{errors.problemsItSolves}</TextError>
                  )}
                </ProblemsItSolvesLabel>
              </Form>
            );
          }}
        </Formik>
      </MainContent>
      <StyledButtonWrapper>
        <SecondaryButton
          $styledType="rose"
          type="submit"
          form="formDirectionWork"
        >
          Зберегти
        </SecondaryButton>
      </StyledButtonWrapper>
      {response && (
        <Notify $show={response.status === 200}>
          <IconDone width="22px" height="22px" /> Дані збережено
        </Notify>
      )}
      {error && <Notify $show>!!! Щось пішло не так !!!</Notify>}
    </div>
  );
};

export default DirectionWork;
