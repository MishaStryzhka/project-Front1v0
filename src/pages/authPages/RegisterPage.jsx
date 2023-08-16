import FormRegister from 'components/FormRegister/FormRegister';
import FormTypeUser from 'components/FormTypeUser/FormTypeUser';
import Modal from 'components/Modal/Modal';
import OrBoxAotorization from 'components/OrBoxAotorization/OrBoxAotorization';
import { useAuth } from 'hooks';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { register } from 'redux/auth/operations';

const RegisterPage = () => {
  const location = useLocation();
  const [isOpenModal, setIsOpenModal] = useState(
    location.pathname === '/register/typeUser'
  );
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const accessToken = searchParams.get('accessToken');

  const handleRegisterSubmit = async values => {
    console.log('register - values', values);
    dispatch(register(values));
    isLoggedIn && setIsOpenModal(true);
  };

  const handleRegisterTypeUser = async values => {
    console.log('typeUser', values);
    console.log('accessToken', accessToken);

    // dispatch(register(values));
    setIsOpenModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <FormRegister
        onSubmit={handleRegisterSubmit}
        setIsOpenModal={setIsOpenModal}
      />
      <OrBoxAotorization />

      {isOpenModal && (
        <Modal>
          <FormTypeUser onSubmit={handleRegisterTypeUser} />
        </Modal>
      )}
    </>
  );
};

export default RegisterPage;
