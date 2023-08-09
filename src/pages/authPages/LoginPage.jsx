import FormLogin from 'components/FormLogin/FormLogin';
// import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
// import { useDispatch } from 'react-redux';
// import * as Yup from 'yup';

const LoginPage = () => {
  const handleLogInSubmit = async values => {
    console.log('values', values);
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <FormLogin onSubmit={handleLogInSubmit} />
    </>
  );
};

export default LoginPage;
