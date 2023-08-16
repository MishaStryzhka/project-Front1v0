import Modal from 'components/Modal/Modal';
import {
  ButtonWrapper,
  FormDescription,
  FormRefreshEmail,
  TitleModal,
} from './ModalRefreshEmail.styled';
import { Formik } from 'formik';
import { useAuth } from 'hooks';
import { validationRefreshEmailSchema } from 'schemas/RefreshEmailSchema';
import {
  Button,
  FieldStyled,
  ImputWrap,
  Label,
  TextError,
} from 'components/FormLogin/FormLogin.styled';
import { Placeholder } from 'components/FormPatientPage/FormPatientPage.styled';

const ModalRefreshEmail = ({ setIsOpenModal }) => {
  let { user, error } = useAuth();

  console.log('error', error);

  const handleRefreshEmail = value => {
    const { email, newEmail } = value;
    if (email === user.email) {
      console.log('value', value);
    } else {
      error = 'Електронна пошта невірна!';
    }
  };

  return (
    <Modal onClick={() => setIsOpenModal(null)}>
      <TitleModal>Змінити e-mail</TitleModal>

      <Formik
        initialValues={{
          email: '',
          newEmail: '',
        }}
        validationSchema={validationRefreshEmailSchema}
        onSubmit={handleRefreshEmail}
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
            <FormRefreshEmail onSubmit={handleSubmit}>
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
                    required
                  />
                  {!values.email && <Placeholder>Старий e-mail</Placeholder>}
                  {(errors.email || error) && touched.email && (
                    <TextError>{error || errors.email}</TextError>
                  )}
                </Label>

                <Label>
                  <FieldStyled
                    error={
                      errors.newEmail && touched.newEmail && errors.newEmail
                    }
                    valid={values.newEmail}
                    type="email"
                    name="newEmail"
                    onChange={e => {
                      error = null;
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    required
                  />
                  {!values.newEmail && <Placeholder>Новий e-mail</Placeholder>}
                  {errors.newEmail && touched.newEmail && (
                    <TextError>{errors.newEmail}</TextError>
                  )}
                </Label>
              </ImputWrap>
              <FormDescription>
                Ви отримаєте лист із підтвердженням змін на вказану вами нову
                електрону адресу. Лист містить відоме лише вам посилання, за
                яким вам необхідно перейти, щоб завершити процедуру зміни
                електронної адреси.
              </FormDescription>
              <ButtonWrapper>
                <Button type="submit">Змінити e-mail</Button>
              </ButtonWrapper>
            </FormRefreshEmail>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default ModalRefreshEmail;
