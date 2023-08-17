import FormRegister from 'components/FormRegister/FormRegister';
import FormTypeUser from 'components/FormTypeUser/FormTypeUser';
import Modal from 'components/Modal/Modal';
import OrBoxAotorization from 'components/OrBoxAotorization/OrBoxAotorization';
import { useAuth } from 'hooks';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { register, updateUserType } from 'redux/auth/operations';
import { saveToken } from 'redux/auth/slice';

const RegisterPage = () => {
  const location = useLocation();
  const { isLoggedIn, userType } = useAuth();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const accessToken = searchParams.get('accessToken');
  const dispatch = useDispatch();
  false && setSearchParams(); // eslint

  useEffect(() => {
    if (accessToken) {
      dispatch(saveToken(accessToken));
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    location.pathname === '/register/typeUser' && setIsOpenModal(true);
    if (!isOpenModal) {
      isLoggedIn && !userType && setIsOpenModal(true);
    }
  }, [location, isLoggedIn, userType, setSearchParams, isOpenModal]);

  const handleRegisterSubmit = async values => {
    dispatch(register(values));
  };

  const handleRegisterTypeUser = async values => {
    if (accessToken) {
      values.accessToken = accessToken;
    }
    dispatch(updateUserType(values));
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
