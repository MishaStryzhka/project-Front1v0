import { Formik } from 'formik';
import { validationLoginSchema } from 'schemas';
import {
  FieldCheckboxStyled,
  FieldStyled,
  FormStyled,
  Label,
  LabelCheckbox,
  ImputWrap,
  TextError,
  TextCheckbox,
} from './FormLogin.styled';
import Checkbox from 'components/Checkbox/Checkbox';
import { useAuth } from 'hooks';

const FormLogin = ({ onSubmit }) => {
  let { error } = useAuth();

  return (
    <>
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
            <FormStyled id="FormLogin" onSubmit={handleSubmit}>
              <ImputWrap>
                <Label>
                  <FieldStyled
                    error={errors.email && touched.email && errors.email}
                    valid={values.email}
                    type="email"
                    name="email"
                    onChange={e => {
                      error = null;
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    placeholder="E-mail"
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
                    onChange={e => {
                      error = null;
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    placeholder="Пароль"
                    required
                  />
                  {errors.password && touched.password && (
                    <TextError>{errors.password}</TextError>
                  )}
                  {error?.status === 401 && (
                    <TextError>
                      Електронна пошта або пароль неправильні
                    </TextError>
                  )}
                </Label>
              </ImputWrap>

              <LabelCheckbox>
                <FieldCheckboxStyled
                  type={'checkbox'}
                  name="rememberMe"
                  // onChange={handleChange}
                  onBlur={handleBlur}
                  component={Checkbox}
                />
                <TextCheckbox>запам’ятати мене</TextCheckbox>
              </LabelCheckbox>
            </FormStyled>
          );
        }}
      </Formik>
    </>
  );
};

export default FormLogin;
