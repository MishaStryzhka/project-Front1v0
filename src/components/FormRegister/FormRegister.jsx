import {
  Button,
  FieldStyled,
  FormStyled,
  ImputWrap,
  Label,
  NavWrap,
  TextError,
  Title,
} from 'components/FormLogin/FormLogin.styled';
import PassValidateBox from 'components/PassValidateBox/PassValidateBox';
import { Formik } from 'formik';
import { validationRegisterSchema } from 'schemas';
import {
  FieldCheckboxStyled,
  LabelCheckboxStyled,
  LabelCheckboxText,
} from './FormRedister.styled';
import CheckboxToggle from 'components/CheckboxToggle/CheckboxToggle';

const FormRegister = ({ onSubmit }) => {
  return (
    <>
      <Title>Реєстрація нового користувача</Title>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          typeUser: true,
        }}
        validationSchema={validationRegisterSchema}
        onSubmit={({ email, password, typeUser }) =>
          onSubmit({
            email,
            password,
            typeUser: typeUser ? 'patient' : 'doctor',
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e-mail"
                    required
                  />
                  {errors.email && touched.email && (
                    <TextError>{errors.email}</TextError>
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

                <LabelCheckboxStyled>
                  <LabelCheckboxText value={values.typeUser}>
                    Пацієнт
                  </LabelCheckboxText>
                  <FieldCheckboxStyled
                    type={'checkbox'}
                    name="typeUser"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    component={CheckboxToggle}
                  />
                  <LabelCheckboxText value={!values.typeUser}>
                    Лікар
                  </LabelCheckboxText>
                </LabelCheckboxStyled>
              </ImputWrap>
              <NavWrap>
                <Button type="submit">Зберегти та продовжити </Button>
              </NavWrap>
            </FormStyled>
          );
        }}
      </Formik>
    </>
  );
};

export default FormRegister;
