import CheckboxToggle from 'components/CheckboxToggle/CheckboxToggle';
import {
  Button,
  FieldCheckboxStyled,
  FormStyled,
  ImputWrap,
  LabelCheckboxStyled,
  NavWrap,
} from 'components/FormLogin/FormLogin.styled';
import { LabelCheckboxText } from 'components/FormRegister/FormRedister.styled';
import { Formik } from 'formik';

const FormTypeUser = ({ onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{
          typeUser: true,
        }}
        onSubmit={({ typeUser }) =>
          onSubmit({
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
              <NavWrap style={{ paddingBottom: 80 }}>
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
