import Modal from 'componentsReusable/Modal/Modal';
import {
  ButtonWrapper,
  FormRefreshEmail,
  TitleModal,
} from '../ModalRefreshEmail/ModalRefreshEmail.styled';
import { Formik } from 'formik';
import { useAuth } from 'hooks';
import {
  Button,
  FieldStyled,
  ImputWrap,
  Label,
  TextError,
} from 'components/Forms/FormLogin/FormLogin.styled';
import { Placeholder } from 'components/Forms/FormPersonalDataPatient/FormPersonalDataPatient.styled';
import { validationRefreshPasswordSchema } from 'schemas/RefreshPasswordSchema';
import PassValidateBox from 'components/PassValidateBox/PassValidateBox';
import { useDispatch } from 'react-redux';
import { refreshPassword } from 'redux/auth/operations';

const ModalRefreshPassword = ({ setIsOpenModal }) => {
  let { error } = useAuth();
  const dispatch = useDispatch();

  const handleRefreshPassword = value => {
    const { password, newPassword } = value;
    console.log('value', password, newPassword);
    dispatch(refreshPassword({ password, newPassword }));
  };

  return (
    <Modal onClick={() => setIsOpenModal(null)}>
      <TitleModal>Змінити пароль</TitleModal>

      <Formik
        initialValues={{
          password: '',
          newPassword: '',
          confirmNewPassword: '',
        }}
        validationSchema={validationRefreshPasswordSchema}
        onSubmit={handleRefreshPassword}
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
            <FormRefreshEmail onSubmit={handleSubmit}>
              <ImputWrap>
                <Label>
                  <FieldStyled
                    error={
                      errors.password && touched.password && errors.password
                    }
                    valid={values.password}
                    type="password"
                    name="password"
                    onChange={e => {
                      error = null;
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    required
                  />
                  {!values.password && <Placeholder>Старий пароль</Placeholder>}
                  {(errors.password || error) && touched.password && (
                    <TextError>{error || errors.password}</TextError>
                  )}
                </Label>

                <Label>
                  <FieldStyled
                    error={
                      errors.newPassword &&
                      touched.newPassword &&
                      errors.newPassword
                    }
                    type={'password'}
                    name="newPassword"
                    value={values.newPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Новий пароль"
                    required
                  />
                  {errors.newPassword && touched.newPassword && (
                    <TextError>{errors.newPassword}</TextError>
                  )}

                  <PassValidateBox value={values.newPassword} />
                </Label>

                <Label>
                  <FieldStyled
                    error={
                      errors.confirmNewPassword &&
                      touched.confirmNewPassword &&
                      errors.confirmNewPassword
                    }
                    type={'password'}
                    name="confirmNewPassword"
                    value={values.confirmNewPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Повторити новий пароль"
                    required
                  />
                  {errors.confirmNewPassword && touched.confirmNewPassword && (
                    <TextError>{errors.confirmNewPassword}</TextError>
                  )}
                </Label>
              </ImputWrap>
              {/* <FormDescription>
                Ви отримаєте лист із підтвердженням змін на вказану вами нову
                електрону адресу. Лист містить відоме лише вам посилання, за
                яким вам необхідно перейти, щоб завершити процедуру зміни
                електронної адреси.
              </FormDescription> */}
              <ButtonWrapper>
                <Button type="submit">Змінити пароль</Button>
              </ButtonWrapper>
            </FormRefreshEmail>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default ModalRefreshPassword;
