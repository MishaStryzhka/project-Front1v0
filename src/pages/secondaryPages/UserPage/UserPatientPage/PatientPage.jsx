import Container from 'componentsReusable/Container/Container';
import FormPatientPage from 'components/Forms/FormPersonalDataPatient/FormPersonalDataPatient';
import ModalRefreshEmail from 'components/ModalRefreshEmail/ModalRefreshEmail';
import ModalRefreshPassword from 'components/ModalRefreshPassword/ModalRefreshPassword';
import NavigationContainer from 'components/NavigationContainer/NavigationContainer';
import { useState } from 'react';
import Title from 'componentsReusable/Titles/Title/Title';

export const PatientPage = () => {
  const [onChange, setOnChange] = useState(null);

  return (
    <Container>
      <Title type="page">Особистий кабінет пацієнта</Title>

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
