import {
  FieldStyled,
  FormStyled,
  ImputWrap,
  Label,
  TextError,
} from 'components/FormLogin/FormLogin.styled';
import PassValidateBox from 'components/PassValidateBox/PassValidateBox';
import { Formik } from 'formik';
import { validationRegisterSchema } from 'schemas';
import { useAuth } from 'hooks';
import Title from 'componentsReusable/Titles/Title/Title';

const FormRegister = ({ onSubmit }) => {
  let { error } = useAuth();

  return (
    <>
      <Title>Реєстрація нового користувача</Title>
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
            <FormStyled onSubmit={handleSubmit}>
              <ImputWrap>
                <Label>
                  <FieldStyled
                    error={errors.email && touched.email && errors.email}
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
                  {errors.email && touched.email && (
                    <TextError>{errors.email}</TextError>
                  )}
                  {error && (
                    <TextError>
                      {error.status === 409 &&
                        'Користувач з таким адресом електроної пошти вже існує'}
                      {error.status === 400 &&
                        'Невірний формат електроної пошти'}
                    </TextError>
                  )}
                </Label>

                <Label>
                  <FieldStyled
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
                  {errors.password && touched.password && (
                    <TextError>{errors.password}</TextError>
                  )}

                  <PassValidateBox value={values.password} />
                </Label>

                <Label>
                  <FieldStyled
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
                  {errors.confirmPassword && touched.confirmPassword && (
                    <TextError>{errors.confirmPassword}</TextError>
                  )}
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
