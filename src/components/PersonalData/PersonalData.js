import FormPersonalDataPatient from 'components/Forms/FormPersonalDataPatient/FormPersonalDataPatient';
import FormPersonalDataDoctor from 'components/Forms/FormPersonalDataDoctor/FormPersonalDataDoctor';
import { useAuth } from 'hooks';
import MainContent from 'componentsReusable/MainContent/MainContent';
import Title from 'componentsReusable/Titles/Title/Title';
import SecondaryButton from 'componentsReusable/Buttons/SecondaryButton/SecondaryButton';
import { Notify, StyledButtonWrapper } from './PersonalData.styled';
import IconDone from 'images/icons/IconDone';
import { useDispatch } from 'react-redux';
import { resetResponse } from 'redux/auth/slice';

const PersonalData = () => {
  const { userType, response } = useAuth();
  const dispatch = useDispatch();
  console.log('response', response);

  setTimeout(() => {
    dispatch(resetResponse(null));
  }, 2000);

  return (
    <div>
      <MainContent width={'800px'}>
        <Title>
          Особистий кабінет {userType === 'doctor' ? 'лікаря' : 'пацієнта'}
        </Title>
        {userType === 'doctor' && <FormPersonalDataDoctor />}
        {userType === 'patient' && <FormPersonalDataPatient />}
      </MainContent>
      <StyledButtonWrapper>
        <SecondaryButton
          $styledType="rose"
          type="submit"
          form="formPersonalData"
        >
          Зберегти
        </SecondaryButton>
      </StyledButtonWrapper>
      <Notify show={response?.status === 200}>
        <IconDone width="22px" height="22px" /> Дані збережено
      </Notify>
    </div>
  );
};

export default PersonalData;
