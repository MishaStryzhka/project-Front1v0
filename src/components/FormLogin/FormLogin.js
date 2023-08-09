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
} from './FormLogin.styled';
// import { useState } from 'react';
// import { useAuth } from 'hooks';
// import theme from 'theme';

const FormLogin = ({ onSubmit }) => {
  // const [openPassword, setOpenPassword] = useState(false);
  // const { currentTheme } = useAuth();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        checkbox: false,
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
        // const isPasswordValid = values.password && values.password.length >= 6;

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
              </Label>

              <Label>
                <FieldStyled
                  error={errors.password && touched.password && errors.password}
                  type={'password'}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Пароль"
                  required
                />
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
              <LabelCheckboxStyled>
                <FieldCheckboxStyled
                  //   error={errors.check && touched.check && errors.check}
                  type={'checkbox'}
                  name="checkbox"
                  //   value={values.checkbox}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>запам’ятати мене</span>
              </LabelCheckboxStyled>

              <span>Забули пароль?</span>
            </div>

            <Button type="submit">Вхід</Button>
          </FormStyled>
        );
      }}
    </Formik>
  );
};

export default FormLogin;
