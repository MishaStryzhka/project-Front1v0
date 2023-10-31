import Form from 'components/Forms/Form/Form';
import { Formik } from 'formik';
import {
  CheckboxField,
  CheckboxInputItem,
  CheckboxLabel,
  CommunicationWithDoctorLabel,
  CommunicationWrap,
  HowApplicationsAreReceivedLabel,
  ListCommunication,
  StyledLegend,
} from './Communication.styled';
import Checkbox from 'components/Checkbox/Checkbox';
import MainContent from 'componentsReusable/MainContent/MainContent';
import { useAuth } from 'hooks';
import {
  Notify,
  StyledButtonWrapper,
} from 'components/PersonalData/PersonalData.styled';
import SecondaryButton from 'componentsReusable/Buttons/SecondaryButton/SecondaryButton';
import IconDone from 'images/icons/IconDone';
import { useDispatch } from 'react-redux';
import { resetError, resetResponse } from 'redux/auth/slice';
import { validationCommunication } from 'schemas';
import { TextError } from 'componentsReusable/Inputs/Input/Input.styled';
import { updateUserInfo } from 'redux/auth/operations';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Communication = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  let { user, userType, response, error } = useAuth();
  const [typeSubmit, setTypeSubmit] = useState('save'); // 'save', 'preview', 'publish'

  setTimeout(() => {
    response && dispatch(resetResponse(null));
  }, 2000);

  setTimeout(() => {
    error && dispatch(resetError(null));
  }, 2000);

  const onSubmit = ({
    communicationWithDoctor,
    howApplicationsAreReceived,
  }) => {
    if (typeSubmit === 'preview') {
      navigate(`/in/${user?.userID}`, {
        // replace: true,
        state: {
          user: {
            ...user,
            communicationWithDoctor,
            howApplicationsAreReceived,
          },
          back: location.pathname,
        },
      });
    } else if (typeSubmit === 'publish') {
      dispatch(
        updateUserInfo({
          communicationWithDoctor,
          howApplicationsAreReceived,
          isPublish: user.isPublish ? !user.isPublish : true,
        })
      );
    } else {
      dispatch(
        updateUserInfo({
          communicationWithDoctor,
          howApplicationsAreReceived,
        })
      );
    }
  };

  return (
    <div>
      <MainContent width={'800px'}>
        {/* <Title>
          Особистий кабінет {userType === 'doctor' ? 'лікаря' : 'пацієнта'}
        </Title> */}
        <Formik
          initialValues={{
            communicationWithDoctor:
              location?.state?.user?.communicationWithDoctor ||
              user.communicationWithDoctor ||
              [],
            howApplicationsAreReceived:
              location?.state?.user?.howApplicationsAreReceived ||
              user.howApplicationsAreReceived ||
              [],
          }}
          validationSchema={validationCommunication}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            setFieldValue,
            setFieldTouched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            console.log('values', values);

            return (
              <Form
                onSubmit={handleSubmit}
                isRequiredFields
                save={() => onSubmit(values)}
                id={'formCommunication'}
              >
                <CommunicationWrap>
                  <CommunicationWithDoctorLabel>
                    <StyledLegend>
                      Зв’язок пацієнта з лікарем <span>*</span>
                    </StyledLegend>
                    <ListCommunication>
                      <CheckboxInputItem>
                        <CheckboxField
                          type="checkbox"
                          id="telegramBot"
                          name="communicationWithDoctor"
                          value="telegramBot"
                          component={Checkbox}
                          onChange={e => {
                            setFieldTouched('communicationWithDoctor');
                            handleChange(e);
                          }}
                          checked
                        />
                        <CheckboxLabel htmlFor="telegramBot">
                          Телеграм-бот
                        </CheckboxLabel>
                      </CheckboxInputItem>

                      <CheckboxInputItem>
                        <CheckboxField
                          type="checkbox"
                          id="chatBotOnTheSite"
                          name="communicationWithDoctor"
                          value="chatBotOnTheSite"
                          component={Checkbox}
                          onChange={e => {
                            setFieldTouched('communicationWithDoctor');
                            handleChange(e);
                          }}
                        />
                        <CheckboxLabel htmlFor="chatBotOnTheSite">
                          Чат-бот на сайті
                        </CheckboxLabel>
                      </CheckboxInputItem>
                    </ListCommunication>
                    {errors.communicationWithDoctor &&
                      touched.communicationWithDoctor && (
                        <TextError>{errors.communicationWithDoctor}</TextError>
                      )}
                  </CommunicationWithDoctorLabel>
                  <HowApplicationsAreReceivedLabel>
                    <StyledLegend>
                      Як поступають заявки <span>*</span>
                    </StyledLegend>
                    <ListCommunication>
                      <CheckboxInputItem>
                        <CheckboxField
                          type="checkbox"
                          id="telegramBot"
                          name="howApplicationsAreReceived"
                          value="telegramBot"
                          component={Checkbox}
                          onChange={e => {
                            setFieldTouched('howApplicationsAreReceived');
                            handleChange(e);
                          }}
                          checked
                        />
                        <CheckboxLabel htmlFor="telegramBot">
                          Телеграм-бот
                        </CheckboxLabel>
                      </CheckboxInputItem>

                      <CheckboxInputItem>
                        <CheckboxField
                          type="checkbox"
                          id="chatBotOnTheSite"
                          name="howApplicationsAreReceived"
                          value="chatBotOnTheSite"
                          component={Checkbox}
                          onChange={e => {
                            setFieldTouched('howApplicationsAreReceived');
                            handleChange(e);
                          }}
                        />
                        <CheckboxLabel htmlFor="chatBotOnTheSite">
                          Чат-бот на сайті
                        </CheckboxLabel>
                      </CheckboxInputItem>

                      <CheckboxInputItem>
                        <CheckboxField
                          type="checkbox"
                          id="email"
                          name="howApplicationsAreReceived"
                          value="email"
                          component={Checkbox}
                          onChange={e => {
                            setFieldTouched('howApplicationsAreReceived');
                            handleChange(e);
                          }}
                        />
                        <CheckboxLabel htmlFor="email">
                          Електрона пошта
                        </CheckboxLabel>
                      </CheckboxInputItem>
                    </ListCommunication>
                    {errors.howApplicationsAreReceived &&
                      touched.howApplicationsAreReceived && (
                        <TextError>
                          {errors.howApplicationsAreReceived}
                        </TextError>
                      )}
                  </HowApplicationsAreReceivedLabel>
                </CommunicationWrap>
              </Form>
            );
          }}
        </Formik>
      </MainContent>
      <StyledButtonWrapper $userType={userType}>
        <SecondaryButton
          $styledType="green"
          type="submit"
          onClick={() => {
            setTypeSubmit('preview');
          }}
          form="formCommunication"
        >
          Переглянути картку як користувач
        </SecondaryButton>
        <SecondaryButton
          $styledType="green"
          type="submit"
          form="formCommunication"
        >
          Зберегти
        </SecondaryButton>
        <SecondaryButton
          $styledType="rose"
          type="submit"
          onClick={() => {
            setTypeSubmit('publish');
          }}
          form="formCommunication"
        >
          {user.isPublish ? 'Зняти публікацію' : 'Опублікувати'}
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

export default Communication;
