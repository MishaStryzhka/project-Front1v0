import { Label, TextError } from 'components/Forms/FormLogin/FormLogin.styled';
import {
  Placeholder,
  StyledButton,
} from 'components/Forms/FormPersonalDataPatient/FormPersonalDataPatient.styled';
import ModalRefreshEmail from 'components/Modals/ModalRefreshEmail/ModalRefreshEmail';
import ModalRefreshPassword from 'components/Modals/ModalRefreshPassword/ModalRefreshPassword';
import { Formik } from 'formik';
import { useAuth } from 'hooks';
import IconRemove from 'images/icons/IconRemove';
import { useState } from 'react';
import {
  ButtonRefresh,
  ButtonWrapper,
  StyledForm,
  StyledImputWrap,
} from './AccountData.styled';
import MainContent from 'componentsReusable/MainContent/MainContent';
import ModalDeleteAccount from 'components/Modals/ModalRemoveAccount/ModalRemoveAccount';
import Input from 'componentsReusable/Inputs/Input/Input';
import IconEdit from 'images/icons/IconEdit';

const AccountData = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  let { user, error } = useAuth();
  const [onChange, setOnChange] = useState(null);

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
    <div>
      <MainContent width={'800px'}>
        {/* <Title>
          Особистий кабінет {userType === 'doctor' ? 'лікаря' : 'пацієнта'}
        </Title> */}
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
              <StyledForm>
                <StyledImputWrap>
                  <Label>
                    <Input
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
                      // required
                      placeholder={'e-mail'}
                    />
                    <ButtonRefresh type="button" onClick={handleRefreshEmail}>
                      <IconEdit />
                    </ButtonRefresh>
                  </Label>

                  <Label>
                    <Input
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
                      // required
                      placeholder="Пароль"
                    />
                    <ButtonRefresh
                      type="button"
                      onClick={handleRefreshPassword}
                    >
                      <IconEdit />
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
              </StyledForm>
            );
          }}
        </Formik>

        {onChange === 'email' && (
          <ModalRefreshEmail setIsOpenModal={() => setOnChange(null)} />
        )}
        {onChange === 'password' && (
          <ModalRefreshPassword setIsOpenModal={() => setOnChange(null)} />
        )}
        {isOpenModal && (
          <ModalDeleteAccount setIsOpenModal={() => setIsOpenModal(null)} />
        )}
      </MainContent>
      <ButtonWrapper>
        <StyledButton type="button" onClick={() => setIsOpenModal(true)}>
          <IconRemove /> Видалити акаунт
        </StyledButton>
      </ButtonWrapper>
    </div>
  );
};

export default AccountData;
