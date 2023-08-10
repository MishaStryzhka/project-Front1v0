import {
  Button,
  FieldStyled,
  FormStyled,
  ImputWrap,
  Label,
  TextError,
  Title,
} from 'components/FormLogin/FormLogin.styled';
import { Formik } from 'formik';
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { validationRegisterSchema } from 'schemas';

const FormRegister = ({ onSubmit }) => {
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
                    placeholder="Повторіть пароль"
                    required
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <TextError>{errors.confirmPassword}</TextError>
                  )}
                </Label>
              </ImputWrap>

              <div
                style={{
                  width: 800,
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: 20,
                  alignItems: 'baseline',
                }}
              >
                {/* <LabelCheckboxStyled>
                <FieldCheckboxStyled
                  //   error={errors.check && touched.check && errors.check}
                  type={'checkbox'}
                  name="rememberMe"
                  //   value={values.checkbox}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>запам’ятати мене</span>
              </LabelCheckboxStyled> */}

                <NavLink to="/refreshPassword">Забули пароль?</NavLink>
              </div>

              {/* <div
              style={{
                display: 'flex',
                // justifyContent: 'center',
                boxSizing: 'border-box',
                paddingLeft: 78,
                columnGap: 279,
                width: 800,
                paddingTop: 52,
              }}
            > */}
              {/* <StyledNavLink to="/register">Новий користувач</StyledNavLink> */}
              <Button type="submit">Вхід</Button>
              {/* </div> */}
            </FormStyled>
          );
        }}
      </Formik>
    </>
  );
};

export default FormRegister;
