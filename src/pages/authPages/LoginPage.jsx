import Container from 'componentsReusable/Container/Container';
import FormLogin from 'components/FormLogin/FormLogin';
import OrBoxAotorization from 'components/OrBoxAotorization/OrBoxAotorization';

import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogInSubmit = async values => {
    dispatch(logIn(values));
  };

  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <FormLogin onSubmit={handleLogInSubmit} />

      <OrBoxAotorization />
    </Container>
  );
};

export default LoginPage;
