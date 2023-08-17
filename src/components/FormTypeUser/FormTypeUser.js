import CheckboxToggle from 'components/CheckboxToggle/CheckboxToggle';
import {
  Button,
  FieldCheckboxStyled,
  ImputWrap,
  LabelCheckboxStyled,
  NavWrap,
} from 'components/FormLogin/FormLogin.styled';
import { LabelCheckboxText } from 'components/FormRegister/FormRegister.styled';
import { Formik } from 'formik';
import { FormStyled, Title } from './FormTypeUser.styled';

const FormTypeUser = ({ onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{
          userType: true,
        }}
        onSubmit={({ userType }) =>
          onSubmit({
            userType: userType ? 'patient' : 'doctor',
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
              <Title>Виберіть тип користувача</Title>
              <ImputWrap style={{ paddingTop: 28 }}>
                <LabelCheckboxStyled>
                  <LabelCheckboxText value={values.userType}>
                    Пацієнт
                  </LabelCheckboxText>
                  <FieldCheckboxStyled
                    type={'checkbox'}
                    name="userType"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    component={CheckboxToggle}
                  />
                  <LabelCheckboxText value={!values.userType}>
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

export default FormTypeUser;
