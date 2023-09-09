import Container from 'componentsReusable/Container/Container';
import { Title } from 'components/FormLogin/FormLogin.styled';
import FormPatientPage from 'components/FormPatientPage/FormPatientPage';
import ModalRefreshEmail from 'components/ModalRefreshEmail/ModalRefreshEmail';
import ModalRefreshPassword from 'components/ModalRefreshPassword/ModalRefreshPassword';
import NavigationContainer from 'components/NavigationContainer/NavigationContainer';
import { useState } from 'react';

export const PatientPage = () => {
  const [onChange, setOnChange] = useState(null);

  return (
    <Container>
      <Title>Особистий кабінет пацієнта</Title>

      <NavigationContainer />

      <FormPatientPage setOnChange={setOnChange} />

      {onChange === 'email' && (
        <ModalRefreshEmail setIsOpenModal={() => setOnChange(null)} />
      )}
      {onChange === 'password' && (
        <ModalRefreshPassword setIsOpenModal={() => setOnChange(null)} />
      )}
    </Container>
  );
};

export default PatientPage;
