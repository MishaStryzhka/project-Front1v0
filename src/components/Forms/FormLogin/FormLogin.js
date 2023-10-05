import { Formik } from 'formik';
import { validationLoginSchema } from 'schemas';
import {
  FieldCheckboxStyled,
  FormStyled,
  Label,
  LabelCheckbox,
  ImputWrap,
  TextCheckbox,
} from './FormLogin.styled';
import Checkbox from 'components/Checkbox/Checkbox';
import { useAuth } from 'hooks';
import Input from 'componentsReusable/Inputs/Input/Input';

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
                  <Input
                    error={errors.email && touched.email && errors.email}
                    value={values.email}
                    type="email"
                    name="email"
                    onChange={e => {
                      error = null;
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    placeholder="E-mail"
                  />
                </Label>

                <Label>
                  <Input
                    error={
                      (touched.password && errors.password) ||
                      (error &&
                        error.status === 401 &&
                        'Невірна електронна пошта або пароль')
                    }
                    type={'password'}
                    name="password"
                    onChange={e => {
                      error = null;
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    placeholder="Пароль"
                  />
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
