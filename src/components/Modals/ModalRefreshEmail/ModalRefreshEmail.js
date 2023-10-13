import Modal from 'componentsReusable/Modal/Modal';
import {
  ButtonWrapper,
  FormDescription,
  FormRefreshEmail,
} from './ModalRefreshEmail.styled';
import { Formik } from 'formik';
import { useAuth } from 'hooks';
import { validationRefreshEmailSchema } from 'schemas/RefreshEmailSchema';
import {
  Button,
  ImputWrap,
  Label,
} from 'components/Forms/FormLogin/FormLogin.styled';
import { useDispatch } from 'react-redux';
import { refreshEmail } from 'redux/auth/operations';
import Title from 'componentsReusable/Titles/Title/Title';
import Input from 'componentsReusable/Inputs/Input/Input';

const ModalRefreshEmail = ({ setIsOpenModal }) => {
  let { user, error } = useAuth();
  const dispatch = useDispatch();

  console.log('error', error);

  const handleRefreshEmail = value => {
    const { email } = value;
    if (email === user.email) {
      // console.log('value', value);
      dispatch(refreshEmail(value));
    } else {
      error = 'Електронна пошта невірна!';
    }
  };

  return (
    <Modal onClick={() => setIsOpenModal(null)}>
      <Title type="modal">Змінити e-mail</Title>

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
                    required
                    placeholder={'Старий e-mail'}
                    disabled={false}
                  />
                </Label>

                <Label>
                  <Input
                    error={
                      errors.newEmail && touched.newEmail && errors.newEmail
                    }
                    value={values.newEmail}
                    type="email"
                    name="newEmail"
                    onChange={e => {
                      error = null;
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    required
                    placeholder={'Новий e-mail'}
                  />
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
