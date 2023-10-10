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
import { TextError } from '../FormPersonalDataDoctor/FormPersonalDataDoctor.styled';
const FormPersonalDataPatient = () => {
  const { user, currentTheme } = useAuth();
  console.log('user', user);

  const dispatch = useDispatch();

  const onSubmit = value => {
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
            id="formPersonalData"
            isRequiredFields
            // as={FormStyled}
            // onSubmit={handleSubmit}
          >
            <ImputWrap>
              <Label>
                <Input
                  error={errors.lastName && touched.lastName && errors.lastName}
                  type={'text'}
                  name="lastName"
                  onChange={e => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  required
                  placeholder="Прізвище"
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
                  onBlur={handleBlur}
                  required
                  placeholder="Ім’я"
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
                  onBlur={handleBlur}
                  placeholder="По-батькові"
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
                            errors.phones &&
                            errors.phones[index] &&
                            touched.phones[index] &&
                            errors.phones[index]
                          }
                          as={PhoneInputField}
                          field={{
                            name: 'phones',
                            // value: phone ? `+${phone}` : '',
                            value: phone,
                          }}
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

                            touched.phones = [...(touched.phones || '')];
                            touched.phones[index] = true;
                            handleSubmit(e => console.log('EEE'));
                          }}
                          required
                          placeholder="Номер телефону"
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
