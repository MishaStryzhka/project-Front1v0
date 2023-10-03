import Modal from 'componentsReusable/Modal/Modal';
import {
  ButtonWrapper,
  FormRefreshEmail,
} from '../ModalRefreshEmail/ModalRefreshEmail.styled';
import { Formik } from 'formik';
import { useAuth } from 'hooks';
import {
  Button,
  ImputWrap,
  Label,
} from 'components/Forms/FormLogin/FormLogin.styled';
import { validationRefreshPasswordSchema } from 'schemas/RefreshPasswordSchema';
import PassValidateBox from 'components/PassValidateBox/PassValidateBox';
import { useDispatch } from 'react-redux';
import { refreshPassword } from 'redux/auth/operations';
import Title from 'componentsReusable/Titles/Title/Title';
import Input from 'componentsReusable/Inputs/Input/Input';
import { useEffect } from 'react';
import { resetResponse } from 'redux/auth/slice';

const ModalRefreshPassword = ({ setIsOpenModal }) => {
  let { error, response } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (response?.status === 200) {
      setTimeout(() => {
        setIsOpenModal(null);
        setTimeout(() => {
          dispatch(resetResponse('null'));
        }, 500);
      }, 3000);
    }
  }, [dispatch, response, setIsOpenModal]);

  console.log('error', error);
  console.log('response', response);

  const handleRefreshPassword = value => {
    const { password, newPassword } = value;
    console.log('value', password, newPassword);
    dispatch(refreshPassword({ password, newPassword }));
  };

  return (
    <Modal onClick={() => setIsOpenModal(null)}>
      {response?.status === 200 ? (
        <>
          <Title type="modal">
            Вітаємо! <br />
            Ваш пароль змінено.
          </Title>
        </>
      ) : (
        <>
          <Title type="modal">Змінити пароль</Title>
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
                      <Input
                        error={
                          (errors.password &&
                            touched.password &&
                            errors.password) ||
                          (touched.password &&
                            error &&
                            error?.status === 409 &&
                            'Пароль невірний')
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
                        placeholder={'Старий пароль'}
                      />
                    </Label>

                    <Label>
                      <Input
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
                      <PassValidateBox value={values.newPassword} />
                    </Label>

                    <Label>
                      <Input
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
        </>
      )}
    </Modal>
  );
};

export default ModalRefreshPassword;
