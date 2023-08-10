import FormRegister from 'components/FormRegister/FormRegister';
import OrBoxAotorization from 'components/OrBoxAotorization/OrBoxAotorization';
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
  const handleRegisterSubmit = async values => {
    console.log('register - values', values);
  };

  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <FormRegister onSubmit={handleRegisterSubmit} />
      <OrBoxAotorization />
    </>
  );
};

export default RegisterPage;
