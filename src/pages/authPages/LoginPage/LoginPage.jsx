import FormLogin from 'components/FormLogin/FormLogin';
import OrBoxAotorization from 'components/OrBoxAotorization/OrBoxAotorization';

import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  StyledCTABigButton,
  StyledMainContent,
  StyledResetPassword,
  StyledRegister,
  Title,
  WrapRegister,
  StyledContainer,
} from './LoginPage.styled';
import { useState } from 'react';
import ModalResetPassword from 'components/Modals/ModalResetPassword/ModalResetPassword';

const LoginPage = () => {
  const [isOpenModalResetPassword, setIsOpenModalResetPassword] =
    useState(false);
  const dispatch = useDispatch();

  const handleLogInSubmit = async values => {
    dispatch(logIn(values));
  };

  return (
    <StyledContainer>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <StyledMainContent width="800px">
        <Title>Вхід</Title>
        <FormLogin onSubmit={handleLogInSubmit} />
      </StyledMainContent>

      <StyledCTABigButton type="submit" form="FormLogin">
        Увійти
      </StyledCTABigButton>

      <StyledResetPassword
        type="button"
        onClick={() => setIsOpenModalResetPassword(true)}
      >
        Забули пароль?
      </StyledResetPassword>

      <WrapRegister>
        Ще немає акаунту?
        <StyledRegister to="/register">Приєднатися</StyledRegister>
      </WrapRegister>
      <OrBoxAotorization />

      {isOpenModalResetPassword && (
        <ModalResetPassword
          onClick={() => setIsOpenModalResetPassword(false)}
        />
      )}
    </StyledContainer>
  );
};

export default LoginPage;
