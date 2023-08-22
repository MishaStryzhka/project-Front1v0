import {
  Button,
  FieldStyled,
  FormStyled,
  Label,
  TextError,
} from 'components/FormLogin/FormLogin.styled';
import {
  ButtonRefresh,
  FormStyledPatient,
  Placeholder,
  StyledButton,
} from 'components/FormPatientPage/FormPatientPage.styled';
import ModalRefreshEmail from 'components/ModalRefreshEmail/ModalRefreshEmail';
import ModalRefreshPassword from 'components/ModalRefreshPassword/ModalRefreshPassword';
import { Formik } from 'formik';
import { useAuth } from 'hooks';
import IconRemove from 'images/icons/IconRemove';
import { useState } from 'react';
import {
  BtnBox,
  StyledButtonWrapper,
  StyledImputWrap,
} from './AccountData.styled';
import { deleteAccount } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import PrimaryButton from 'components/PrimaryButton/PrimaryButton';
import SecondaryButton from 'components/SecondaryButton/SecondaryButton';

const AccountData = () => {
  let { user, error } = useAuth();
  const [onChange, setOnChange] = useState(null);
  const dispatch = useDispatch();

  const handleRemoveAccount = () => {
    console.log('Remove account');
    dispatch(deleteAccount());
  };

  const onSubmit = value => {
    console.log('value', value);
  };

  const handleRefreshEmail = () => {
    setOnChange('email');
  };

  const handleRefreshPassword = () => {
    setOnChange('password');
  };

  return (
    <>
      <Formik
        initialValues={{
          email: user.email,
          password: '********',
        }}
        // validationSchema={validationDoctorPageSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          return (
            <FormStyledPatient as={FormStyled} onSubmit={handleSubmit}>
              <StyledImputWrap>
                <Label>
                  <FieldStyled
                    disabled={true}
                    error={errors.email && touched.email && errors.email}
                    valid={values.email}
                    type="email"
                    name="email"
                    onChange={e => {
                      error = null;
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    required
                  />
                  <ButtonRefresh type="button" onClick={handleRefreshEmail}>
                    Змінити e-mail
                  </ButtonRefresh>
                  {!values.email && <Placeholder>email</Placeholder>}
                  {errors.email && touched.email && (
                    <TextError>{errors.email}</TextError>
                  )}
                </Label>

                <Label>
                  <FieldStyled
                    disabled={true}
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
                    required
                  />
                  <ButtonRefresh type="button" onClick={handleRefreshPassword}>
                    Змінити пароль
                  </ButtonRefresh>
                  {!values.password && <Placeholder>Пароль</Placeholder>}
                  {errors.password && touched.password && (
                    <TextError>{errors.password}</TextError>
                  )}
                  {error?.status === 401 && (
                    <TextError>
                      Електронна пошта або пароль неправильні
                    </TextError>
                  )}
                </Label>
              </StyledImputWrap>

              <StyledButtonWrapper>
                <StyledButton
                  type="button"
                  onClick={() => handleRemoveAccount()}
                >
                  <IconRemove /> Видалити акаунт
                </StyledButton>
                <BtnBox>
                  <SecondaryButton disabled type="button">
                    Переглянути картку як користувач
                  </SecondaryButton>
                  <SecondaryButton type="submit">
                    Зберегти чернетку
                  </SecondaryButton>
                  <PrimaryButton disabled type="submit">
                    Опублікувати
                  </PrimaryButton>
                </BtnBox>
              </StyledButtonWrapper>
            </FormStyledPatient>
          );
        }}
      </Formik>
      {onChange === 'email' && (
        <ModalRefreshEmail setIsOpenModal={() => setOnChange(null)} />
      )}
      {onChange === 'password' && (
        <ModalRefreshPassword setIsOpenModal={() => setOnChange(null)} />
      )}
    </>
  );
};

export default AccountData;
