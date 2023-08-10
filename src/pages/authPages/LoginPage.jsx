import Container from 'components/Container/Container';
import FormLogin from 'components/FormLogin/FormLogin';
import OrBoxAotorization from 'components/OrBoxAotorization/OrBoxAotorization';
// import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
// import { useDispatch } from 'react-redux';
// import * as Yup from 'yup';

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
