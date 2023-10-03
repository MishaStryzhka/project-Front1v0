import {
  FormStyled,
  ImputWrap,
  Label,
} from 'components/Forms/FormLogin/FormLogin.styled';
import PassValidateBox from 'components/PassValidateBox/PassValidateBox';
import { Formik } from 'formik';
import { validationRegisterSchema } from 'schemas';
import { useAuth } from 'hooks';
import Input from 'componentsReusable/Inputs/Input/Input';

const FormRegister = ({ onSubmit }) => {
  let { error } = useAuth();

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationRegisterSchema}
        onSubmit={({ email, password, userType }) =>
          onSubmit({
            email,
            password,
          })
        }
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          return (
            <FormStyled id="FormRegister" onSubmit={handleSubmit}>
              <ImputWrap>
                <Label>
                  <Input
                    error={
                      (errors.email && touched.email && errors.email) ||
                      (error &&
                        error.status === 409 &&
                        'Користувач з таким адресом електроної пошти вже існує') ||
                      (error &&
                        error.status === 400 &&
                        'Невірний формат електроної пошти')
                    }
                    valid={values.email}
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={e => {
                      error = null;
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    placeholder="e-mail"
                    required
                  />
                </Label>

                <Label>
                  <Input
                    error={
                      errors.password && touched.password && errors.password
                    }
                    type={'password'}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Пароль"
                    required
                  />
                  <PassValidateBox value={values.password} />
                </Label>

                <Label>
                  <Input
                    error={
                      errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword
                    }
                    type={'password'}
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Повторити пароль"
                    required
                  />
                  {/* {errors.confirmPassword && touched.confirmPassword && (
                    <TextError>{errors.confirmPassword}</TextError>
                  )} */}
                </Label>
              </ImputWrap>
              {/* <NavWrap>
                <Button type="submit">Зберегти та продовжити </Button>
              </NavWrap> */}
            </FormStyled>
          );
        }}
      </Formik>
    </>
  );
};

export default FormRegister;
