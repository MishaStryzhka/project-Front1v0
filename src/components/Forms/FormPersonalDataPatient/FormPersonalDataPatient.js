import { ImputWrap, Label } from 'components/Forms/FormLogin/FormLogin.styled';
import PhoneInputField from 'components/PhoneImput/PhoneInput';
import { Formik } from 'formik';
import { useAuth } from 'hooks';
import {
  ButtonAdd,
  ContactMethodLabel,
  Placeholder,
  RadioInputWrap,
  RadioLabel,
  StyledField,
  StyledLegend,
  WrapInputRadio,
  WrapPhone,
  WrapPhoneInput,
} from './FormPersonalDataPatient.styled';
import Checkbox from 'components/Checkbox/Checkbox';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/auth/operations';
import { validationPatientPageScheme } from 'schemas';
import Input from 'componentsReusable/Inputs/Input/Input';
import IconAdd from 'images/icons/IconAdd';
import theme from 'theme';
import Form from '../Form/Form';
import InputDate from 'componentsReusable/Inputs/InputDate/InputDate';
import { useState } from 'react';
const FormPersonalDataPatient = () => {
  const { user, currentTheme } = useAuth();
  const [errorPhones, setErrorPhones] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = value => {
    setSubmitted(false);
    const {
      lastName,
      firstName,
      patronymic,
      phones,
      contactMethods,
      dateOfBirthday,
    } = value;

    dispatch(
      updateUserInfo({
        lastName,
        firstName,
        patronymic,
        phones,
        contactMethods,
        dateOfBirthday,
      })
    );
  };

  return (
    <Formik
      initialValues={{
        lastName: user.lastName || '',
        firstName: user.firstName || '',
        patronymic: user.patronymic || '',
        dateOfBirthday: user.dateOfBirthday || '',
        phones: user.phones || [],
        contactMethods: user.contactMethods || ['chat'],
      }}
      validationSchema={validationPatientPageScheme}
      onSubmit={e => onSubmit(e)}
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
          <Form id="formPersonalData" isRequiredFields>
            <ImputWrap>
              <Label>
                <Input
                  error={errors.lastName && touched.lastName && errors.lastName}
                  type={'text'}
                  name="lastName"
                  onChange={e => {
                    setSubmitted(true);
                    handleChange(e);
                  }}
                  value={values.lastName}
                  onBlur={handleBlur}
                  required
                  placeholder="Прізвище"
                  submitted={submitted}
                />
              </Label>

              <Label>
                <Input
                  error={
                    errors.firstName && touched.firstName && errors.firstName
                  }
                  type={'text'}
                  name="firstName"
                  onChange={e => {
                    handleChange(e);
                  }}
                  value={values.firstName}
                  onBlur={handleBlur}
                  required
                  placeholder="Ім’я"
                  submitted={submitted}
                />
              </Label>

              <Label>
                <Input
                  error={
                    errors.patronymic && touched.patronymic && errors.patronymic
                  }
                  type={'text'}
                  name="patronymic"
                  onChange={e => {
                    handleChange(e);
                  }}
                  value={values.patronymic}
                  onBlur={handleBlur}
                  placeholder="По-батькові"
                  submitted={submitted}
                />
              </Label>

              <Label>
                <InputDate
                  error={
                    errors.dateOfBirthday &&
                    touched.dateOfBirthday &&
                    errors.dateOfBirthday
                  }
                  type="date"
                  name="dateOfBirthday"
                  selectedValue={values.dateOfBirthday}
                  onChange={e => {
                    setFieldValue('dateOfBirthday', new Date(e));
                  }}
                  onBlur={handleBlur}
                  placeholder="Дата народження"
                  required
                  submitted={submitted}
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
                          error={
                            errorPhones[index] ||
                            (errors.phones &&
                              errors.phones[index] &&
                              touched.phones &&
                              touched.phones[index] &&
                              errors.phones[index])
                          }
                          as={PhoneInputField}
                          name="phones"
                          value={phone}
                          setFieldValue={value => {
                            const newPhones = [...values.phones];
                            errorPhones[index] = '';
                            if (
                              values.phones.indexOf('') &&
                              values.phones.indexOf('') !== index &&
                              value === ''
                            ) {
                              // видаляти номер?

                              newPhones.splice(index, 1);
                            } else {
                              if (
                                value !== '' &&
                                values.phones.indexOf(value) !== -1
                              ) {
                                // console.log('error?.phones', error?.phones);

                                const newErrorPhones = [...errorPhones];
                                newErrorPhones[index] =
                                  'Даний номер вже вказаний';
                                setErrorPhones(newErrorPhones);
                                // error = 'Даний номер вже вказаний';
                                return;
                              }
                              newPhones.splice(index, 1, value);
                            }

                            value.length <= 13 &&
                              setFieldValue(
                                'phones',
                                index === -1 ? [value] : newPhones
                              );

                            const regex = /^\+\d{12}$/;
                            touched.phones = [...(touched.phones || '')];
                            touched.phones[index] = regex.test(value)
                              ? false
                              : phone.length === 0
                              ? false
                              : value.length >= phone.length
                              ? false
                              : true;
                          }}
                          required
                          placeholder="Номер телефону"
                          submitted={submitted}
                        />

                        {phone === '' && (
                          <Placeholder type="tel">+380 __ ___ ____</Placeholder>
                        )}
                      </Label>
                    );
                  })}
                </WrapPhoneInput>
                <ButtonAdd
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
                  <IconAdd
                    fill={
                      values.phones.indexOf('') !== -1 ||
                      values.phones.length === 0
                        ? theme[currentTheme].color.disable
                        : theme[currentTheme].color.text
                    }
                  />{' '}
                  Додати номер телефону
                </ButtonAdd>
              </WrapPhone>

              <ContactMethodLabel>
                <StyledLegend>Спосіб зв’язку *</StyledLegend>
                <RadioInputWrap required>
                  <WrapInputRadio>
                    <StyledField
                      type="checkbox"
                      id="chat"
                      name="contactMethods"
                      value="chat"
                      component={Checkbox}
                    />

                    <RadioLabel htmlFor="chat">чат</RadioLabel>
                  </WrapInputRadio>
                  <WrapInputRadio>
                    <StyledField
                      type="checkbox"
                      id="telegramBot"
                      name="contactMethods"
                      value="telegramBot"
                      required
                      component={Checkbox}
                    />
                    <RadioLabel htmlFor="telegramBot">телеграм-бот</RadioLabel>
                  </WrapInputRadio>
                </RadioInputWrap>
              </ContactMethodLabel>
            </ImputWrap>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormPersonalDataPatient;
