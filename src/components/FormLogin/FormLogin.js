import { Formik } from 'formik';
import { validationLoginSchema } from 'schemas';
import {
  Button,
  FieldCheckboxStyled,
  FieldStyled,
  FormStyled,
  Label,
  LabelCheckboxStyled,
  ImputWrap,
  StyledNavLink,
  TextError,
  Title,
  StyledRefreshPassword,
  NavWrap,
} from './FormLogin.styled';
import Checkbox from 'components/Checkbox/Checkbox';

const FormLogin = ({ onSubmit }) => {
  return (
    <>
      <Title>Вхід</Title>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        validationSchema={validationLoginSchema}
        onSubmit={onSubmit}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Пароль"
                    required
                  />
                  {errors.password && touched.password && (
                    <TextError>{errors.password}</TextError>
                  )}
                </Label>
              </ImputWrap>

              <StyledRefreshPassword to="/refreshPassword">
                Забули пароль?
              </StyledRefreshPassword>

              <NavWrap>
                <StyledNavLink to="/register">
                  Створити користувача
                </StyledNavLink>
                <div>
                  <Button type="submit">Вхід</Button>
                  <LabelCheckboxStyled>
                    <FieldCheckboxStyled
                      type={'checkbox'}
                      name="rememberMe"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      component={Checkbox}
                    />
                    <span>запам’ятати мене</span>
                  </LabelCheckboxStyled>
                </div>
              </NavWrap>
            </FormStyled>
          );
        }}
      </Formik>
    </>
  );
};

export default FormLogin;
