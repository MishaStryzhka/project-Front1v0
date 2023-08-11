import Container from 'components/Container/Container';
import { Title } from 'components/FormLogin/FormLogin.styled';
import NavigationContainer from 'components/NavigationContainer/NavigationContainer';

export const PatientPage = () => {
  return (
    <Container>
      <Title>Особистий кабінет пацієнта</Title>

      <NavigationContainer />
    </Container>
  );
};

export default PatientPage;
