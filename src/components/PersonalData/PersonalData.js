import FormPersonalDataPatient from 'components/Forms/FormPersonalDataPatient/FormPersonalDataPatient';
import FormPersonalDataDoctor from 'components/Forms/FormPersonalDataDoctor/FormPersonalDataDoctor';
import { useAuth } from 'hooks';
import MainContent from 'componentsReusable/MainContent/MainContent';
import Title from 'componentsReusable/Titles/Title/Title';
import SecondaryButton from 'componentsReusable/Buttons/SecondaryButton/SecondaryButton';
import { StyledButtonWrapper } from './PersonalData.styled';

const PersonalData = () => {
  const { userType } = useAuth();

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
    </div>
  );
};

export default PersonalData;
