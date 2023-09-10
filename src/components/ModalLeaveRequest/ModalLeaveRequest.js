import Form from 'components/Form/Form';
import { Box, InputWrap } from './ModalLeaveRequest.styled';
import { StyledTitle } from 'pages/mainPages/DirectionsListPage/DirectionsListPage.styled';
import { Formik } from 'formik';
import { Label } from 'components/PersonalData/PersonalData.styled';
import Input from 'components/Input/Input';
import { useAuth } from 'hooks';
import {
  ButtonRefresh,
  WrapPhone,
  WrapPhoneInput,
} from 'components/FormPatientPage/FormPatientPage.styled';
import PhoneInputField from 'components/PhoneImput/PhoneInput';
import { StyledInputRadio } from 'componentsReusable/InputRadio/InputRadio.styled';
import InputRadio from 'componentsReusable/InputRadio/InputRadio';
import { locationListValue } from 'helpers/locationsList';
import { problemListValue } from 'helpers/problemsList';
import Checkbox from 'components/Checkbox/Checkbox';
import {
  FieldCheckboxStyled,
  LabelCheckboxStyled,
  TextCheckbox,
} from 'components/FormLogin/FormLogin.styled';

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
            phones: [],
            age: '',
            location: '',
            problem: '',
            needPediatricDentist: '',
            budget: '',
            descriptionProblem: '',
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
            console.log('values.problem', values);

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

                  <WrapPhone>
                    <WrapPhoneInput>
                      {(values.phones.length === 0
                        ? ['']
                        : [...(values.phones || '')]
                      ).map(phone => {
                        const index = values.phones.indexOf(phone);
                        return (
                          <Label key={values.phones.length === 0 ? 0 : index}>
                            <Input
                              width="700px"
                              as={PhoneInputField}
                              error={null}
                              value={phone}
                              field={{ name: 'phones', value: phone }}
                              setFieldValue={value => {
                                const newPhones = [...values.phones];
                                if (
                                  values.phones.indexOf('') &&
                                  values.phones.indexOf('') !== index &&
                                  value === ''
                                ) {
                                  console.log('видаляти номер?');

                                  newPhones.splice(index, 1);
                                } else {
                                  if (
                                    value !== '' &&
                                    values.phones.indexOf(value) !== -1
                                  ) {
                                    console.log('Даний номер вже вказаний.');
                                    return;
                                  }
                                  newPhones.splice(index, 1, value);
                                }

                                setFieldValue(
                                  'phones',
                                  index === -1 ? [value] : newPhones
                                );
                              }}
                              required
                              // showPlaceholder={phone}
                              placeholder="+380 __ ___ ____"
                            />
                          </Label>
                        );
                      })}
                    </WrapPhoneInput>
                    <ButtonRefresh
                      disabled={
                        values.phones.indexOf('') !== -1 ||
                        values.phones.length === 0
                      }
                      type="button"
                      onClick={() => {
                        const newPhones = [...values.phones];
                        newPhones.push('');
                        setFieldValue('phones', newPhones);
                      }}
                    >
                      + Додати номер телефону
                    </ButtonRefresh>
                  </WrapPhone>

                  <Label>
                    <Input
                      width="700px"
                      error={errors.age && touched.age && errors.age}
                      type={'text'}
                      value={values.age}
                      name="age"
                      onChange={e => {
                        error = null;
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                      required
                      placeholder="Вік, років"
                    />
                  </Label>

                  <InputRadio
                    width="700"
                    selectedValue={values.location}
                    defaultValue={'Район міста'}
                    values={locationListValue}
                    name="location"
                    onChange={value => setFieldValue('location', value)}
                    required
                  />

                  <InputRadio
                    width="700"
                    selectedValue={values.problem}
                    defaultValue={'Проблема'}
                    values={problemListValue}
                    name="problem"
                    onChange={value => setFieldValue('problem', value)}
                  />

                  <LabelCheckboxStyled>
                    <FieldCheckboxStyled
                      type={'checkbox'}
                      name="needPediatricDentist"
                      // onChange={handleChange}
                      onBlur={handleBlur}
                      component={Checkbox}
                    />
                    <TextCheckbox>потрібен дитячий стоматолог</TextCheckbox>
                  </LabelCheckboxStyled>

                  <Label>
                    <Input
                      width="700px"
                      error={errors.budget && touched.budget && errors.budget}
                      type={'number'}
                      value={values.budget}
                      name="budget"
                      onChange={e => {
                        error = null;
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                      required
                      placeholder="Бюджет, грн"
                    />
                  </Label>

                  <Label>
                    <Input
                      as={'textarea'}
                      width="700px"
                      height="150px"
                      error={
                        errors.descriptionProblem &&
                        touched.descriptionProblem &&
                        errors.descriptionProblem
                      }
                      type={'text'}
                      value={values.descriptionProblem}
                      name="descriptionProblem"
                      onChange={e => {
                        error = null;
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                      placeholder="Опис проблеми"
                    />
                    <p>Максимум 300 символів</p>
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
