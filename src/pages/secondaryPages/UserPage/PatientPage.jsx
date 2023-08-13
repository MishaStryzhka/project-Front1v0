import Container from 'components/Container/Container';
import { Title } from 'components/FormLogin/FormLogin.styled';
import FormPatientPage from 'components/FormPatientPage/FormPatientPage';
import NavigationContainer from 'components/NavigationContainer/NavigationContainer';

export const PatientPage = () => {
  return (
    <Container>
      <Title>Особистий кабінет пацієнта</Title>

      <NavigationContainer />

      <FormPatientPage />
    </Container>
  );
};

export default PatientPage;
