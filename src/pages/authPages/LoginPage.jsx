import Container from 'components/Container/Container';
import FormLogin from 'components/FormLogin/FormLogin';
import OrBoxAotorization from 'components/OrBoxAotorization/OrBoxAotorization';

import { Helmet } from 'react-helmet';

const LoginPage = () => {
  const handleLogInSubmit = async values => {
    console.log('values', values);
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
