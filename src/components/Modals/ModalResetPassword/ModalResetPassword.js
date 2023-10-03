import Form from 'components/Forms/Form/Form';
import { Formik } from 'formik';
import { useAuth } from 'hooks';
import Modal from 'componentsReusable/Modal/Modal';
import {
  Box,
  InputWrap,
} from 'components/Modals/ModalLeaveRequest/ModalLeaveRequest.styled';
import { Button, Label } from 'components/Forms/FormLogin/FormLogin.styled';
import {
  ButtonWrapper,
  FormDescription,
} from 'components/Modals/ModalRefreshEmail/ModalRefreshEmail.styled';
import Input from 'componentsReusable/Inputs/Input/Input';
import Title from 'componentsReusable/Titles/Title/Title';

const { createPortal } = require('react-dom');

const ModalResetPassword = ({ onClick }) => {
  let { error } = useAuth();
  error && console.log('error', error);

  const onSubmit = value => {
    console.log('Для відновлення:', value);
    onClick();
  };

  return createPortal(
    <Modal onClick={() => onClick()}>
      <Box>
        <Title type="modal">Забули пароль?</Title>
        <Formik
          initialValues={{ email: '' }}
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
              <Form
                id="ResetPassword"
                // onSubmit={handleSubmit}
                // isRequiredFields
                // save={() => onSubmit(values)}
                sendRequest={() => onSubmit(values)}
              >
                <InputWrap>
                  <Label>
                    <Input
                      error={errors.email && touched.email && errors.email}
                      valid={values.email}
                      type="email"
                      name="email"
                      onChange={e => {
                        error = null;
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                      placeholder="E-mail"
                      required
                    />
                  </Label>
                </InputWrap>
              </Form>
            );
          }}
        </Formik>
        <FormDescription>
          Ви отримаєте лист на вказану вами електрону адресу. Лист міститиме
          відоме лише вам посилання, за яким вам необхідно перейти, щоб
          завершити процедуру відновлення пароля.
        </FormDescription>
        <ButtonWrapper>
          <Button type="submit" form="ResetPassword">
            Відновити пароль
          </Button>
        </ButtonWrapper>
      </Box>
    </Modal>,
    document.querySelector('#modal')
  );
};

export default ModalResetPassword;
