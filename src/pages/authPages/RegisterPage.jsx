import FormRegister from 'components/FormRegister/FormRegister';
import FormTypeUser from 'components/FormTypeUser/FormTypeUser';
import Modal from 'components/Modal/Modal';
import OrBoxAotorization from 'components/OrBoxAotorization/OrBoxAotorization';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const RegisterPage = () => {
  const location = useLocation();
  const [isOpenModal, setIsOpenModal] = useState(
    location.pathname === '/register/typeUser'
  );

  const handleRegisterSubmit = async values => {
    console.log('register - values', values);
  };

  const handleRegisterTypeUser = async values => {
    console.log('register - values', values);
  };

  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <FormRegister onSubmit={handleRegisterSubmit} />
      <OrBoxAotorization />

      {isOpenModal && (
        <Modal onClick={() => setIsOpenModal(false)}>
          <FormTypeUser onSubmit={handleRegisterTypeUser} />
        </Modal>
      )}
    </>
  );
};

export default RegisterPage;
