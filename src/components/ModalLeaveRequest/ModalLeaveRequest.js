import Form from 'components/Form/Form';
import { Box, InputWrap } from './ModalLeaveRequest.styled';
import { StyledTitle } from 'pages/mainPages/DirectionsListPage/DirectionsListPage.styled';
import { Formik } from 'formik';
import { Label } from 'components/PersonalData/PersonalData.styled';
import Input from 'components/Input/Input';
import { useAuth } from 'hooks';

const { default: Modal } = require('components/Modal/Modal');
const { createPortal } = require('react-dom');

const ModalLeaveRequest = ({ onClick }) => {
  let { error } = useAuth();
  error && console.log('error', error);

  const onSubmit = value => {
    console.log('value', value);
  };

  return createPortal(
    <Modal onClick={() => onClick()}>
      <Box>
        <StyledTitle>
          Залиште свою заявку, і лікар з вами зв’яжеться!
        </StyledTitle>
        <Formik
          initialValues={{
            lastName: '',
            firstName: '',
            patronymic: '',
            phones: [],
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
            console.log(
              'values.communicationWithDoctor',
              values.communicationWithDoctor
            );

            return (
              <Form
                // onSubmit={handleSubmit}
                isRequiredFields
                // save={() => onSubmit(values)}
                sendRequest={() => onSubmit(values)}
              >
                <InputWrap>
                  <Label>
                    <Input
                      width="700px"
                      error={
                        errors.lastName && touched.lastName && errors.lastName
                      }
                      type={'text'}
                      value={values.lastName}
                      name="lastName"
                      onChange={e => {
                        error = null;
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                      required
                      placeholder="Прізвище"
                    />
                  </Label>

                  <Label>
                    <Input
                      width="700px"
                      error={
                        errors.firstName &&
                        touched.firstName &&
                        errors.firstName
                      }
                      type={'text'}
                      value={values.firstName}
                      name="firstName"
                      onChange={e => {
                        error = null;
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                      required
                      placeholder="Ім’я"
                    />
                  </Label>
                </InputWrap>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Modal>,
    document.querySelector('#modalLeaveRequest')
  );
};

export default ModalLeaveRequest;
