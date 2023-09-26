import Form from 'components/Form/Form';
import {
  Box,
  HoursWrap,
  InputWrap,
  ListDate,
  StyledTitle,
  WrapDate,
} from './ModalLeaveRequest.styled';
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
import InputRadio from 'componentsReusable/Inputs/InputRadio/InputRadio';
import { locationListValue } from 'helpers/locationsList';
import { problemListValue } from 'helpers/problemsList';
import Checkbox from 'components/Checkbox/Checkbox';
import {
  FieldCheckboxStyled,
  LabelCheckboxStyled,
  TextCheckbox,
} from 'components/FormLogin/FormLogin.styled';
import InputDate from 'componentsReusable/Inputs/InputDate/InputDate';
import InputHours from 'componentsReusable/Inputs/InputHours/InputHours';
import dateFormat from 'dateformat';
import { nanoid } from '@reduxjs/toolkit';

const { default: Modal } = require('componentsReusable/Modal/Modal');
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
            dateOfReception: [
              {
                id: nanoid(),
                day: '',
                from: '',
                to: '',
              },
            ],
            preferredHours: ['', ''],
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
                      width="800px"
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
                      width="800px"
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
                              width="800px"
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
                    <ListDate>
                      {values.dateOfReception.map(dateValue => {
                        const index = values.dateOfReception.findIndex(
                          option => option.id === dateValue.id
                        );
                        return (
                          <WrapDate key={dateValue.id}>
                            <InputDate
                              width="300px"
                              selectedValue={dateValue.day}
                              name="dateOfReception"
                              onChange={value => {
                                const newDateOfReception = [
                                  ...values.dateOfReception,
                                ];

                                newDateOfReception.splice(index, 1, {
                                  ...dateValue,
                                  day: value,
                                });

                                setFieldValue(
                                  'dateOfReception',
                                  newDateOfReception
                                );
                              }}
                              required
                              type="date"
                              placeholder=""
                            />

                            <InputHours
                              disabled={!dateValue.day}
                              width="300px"
                              selectedValue={dateValue}
                              name="dateOfReception"
                              onChange={value => {
                                const newDateOfReception = [
                                  ...values.dateOfReception,
                                ];

                                newDateOfReception.splice(index, 1, value);

                                setFieldValue(
                                  'dateOfReception',
                                  newDateOfReception
                                );
                              }}
                              required
                              type="date"
                              placeholder=""
                            />
                          </WrapDate>
                        );
                      })}
                    </ListDate>

                    <ButtonRefresh
                      disabled={
                        values.dateOfReception.findIndex(
                          option => option.day === ''
                        ) !== -1 ||
                        values.dateOfReception.length === 0 ||
                        values.dateOfReception.length >= 3
                      }
                      type="button"
                      onClick={() => {
                        const newDate = [...values.dateOfReception];
                        newDate.push({
                          id: nanoid(),
                          day: '',
                          from: '',
                          to: '',
                        });
                        setFieldValue('dateOfReception', newDate);
                      }}
                    >
                      + Додати дату
                    </ButtonRefresh>
                  </Label>

                  <Label>
                    <Input
                      width="800px"
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
                    width="800px"
                    selectedValue={values.location}
                    values={locationListValue}
                    name="location"
                    onChange={value => setFieldValue('location', value)}
                    required
                    placeholder="Район міста"
                  />

                  <InputRadio
                    width="800px"
                    selectedValue={values.problem}
                    values={problemListValue}
                    name="problem"
                    onChange={value => setFieldValue('problem', value)}
                    required
                    placeholder="Проблема"
                  />

                  <LabelCheckboxStyled
                    style={{ paddingTop: 0, marginTop: -20, marginBottom: -20 }}
                  >
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
                      width="800px"
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
                      width="800px"
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
