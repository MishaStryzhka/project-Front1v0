import CheckboxToggle from 'components/CheckboxToggle/CheckboxToggle';
import {
  FieldCheckboxStyled,
  ImputWrap,
  LabelCheckbox,
} from 'components/Forms/FormLogin/FormLogin.styled';
import { LabelCheckboxText } from 'components/Forms/FormRegister/FormRegister.styled';
import { Formik } from 'formik';
import { FormStyled, StyledLabelCheckbox, Title } from './FormTypeUser.styled';

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
            <FormStyled id="FormTypeUser" onSubmit={handleSubmit}>
              <ImputWrap>
                <StyledLabelCheckbox>
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
                </StyledLabelCheckbox>
              </ImputWrap>
            </FormStyled>
          );
        }}
      </Formik>
    </>
  );
};

export default FormTypeUser;
