import FormRegister from 'components/Forms/FormRegister/FormRegister';
import FormTypeUser from 'components/Forms/FormTypeUser/FormTypeUser';
import Modal from 'componentsReusable/Modal/Modal';
import OrBoxAotorization from 'components/OrBoxAotorization/OrBoxAotorization';
import { useAuth } from 'hooks';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { register, setAuthHeader, updateUserType } from 'redux/auth/operations';
import { saveToken } from 'redux/auth/slice';
import Title from 'componentsReusable/Titles/Title/Title';
import {
  StyledCTABigButton,
  StyledContainer,
  StyledMainContent,
} from './RegisterPage.styled';

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
      setAuthHeader(accessToken);
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
    <StyledContainer>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <StyledMainContent width="800px">
        <Title>Реєстрація нового користувача</Title>
        <FormRegister onSubmit={handleRegisterSubmit} />
      </StyledMainContent>

      <StyledCTABigButton type="submit" form="FormRegister">
        Зареєструватися
      </StyledCTABigButton>

      <OrBoxAotorization />

      {isOpenModal && (
        <Modal>
          <Title type="modal">Виберіть тип користувача</Title>
          <FormTypeUser onSubmit={handleRegisterTypeUser} />
          <StyledCTABigButton type="submit" form="FormTypeUser">
            Увійти
          </StyledCTABigButton>
        </Modal>
      )}
    </StyledContainer>
  );
};

export default RegisterPage;
