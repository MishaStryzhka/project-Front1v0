import {
  Button,
  FieldStyled,
  FormStyled,
  ImputWrap,
  Label,
  TextError,
} from 'components/FormLogin/FormLogin.styled';
import PhoneInputField from 'components/PhoneImput/PhoneInput';
import { Formik } from 'formik';
import { useAuth } from 'hooks';
import { validationPatientPageScheme } from 'schemas';
import {
  ButtonRefresh,
  ButtonWrapper,
  ContactMethodLabel,
  FormDescription,
  FormStyledPatient,
  Placeholder,
  RadioInputWrap,
  RadioLabel,
  StyledButton,
  StyledField,
  StyledLegend,
  WrapInputRadio,
  WrapPhone,
  WrapPhoneInput,
} from './FormPatientPage.styled';
import Checkbox from 'components/Checkbox/Checkbox';
import IconRemove from 'images/icons/IconRemove';

const FormPatientPage = () => {
  let { user, error } = useAuth();

  const onSubmit = value => {
    console.log('value', value);
  };

  const handleRefreshEmail = () => {
    console.log('refresh email');
  };

  const handleRefreshPassword = () => {
    console.log('refresh password');
  };

  // const handleAddPhoneNumber = () => {
  //   console.log('add phone number');
  // };

  const handleRemoveAccount = () => {
    console.log('Remove account');
  };

  return (
    <Formik
      initialValues={{
        email: user.email,
        password: 'Qwerty123',
        lastName: '',
        firstName: '',
        patronymic: '',
        phones: [],
        contactMethod: '',
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
          <FormStyledPatient as={FormStyled} onSubmit={handleSubmit}>
            <FormDescription>
              <span>*</span> - обов’язкові поля
            </FormDescription>
            <ImputWrap>
              <Label>
                <FieldStyled
                  disabled={true}
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
                <ButtonRefresh type="button" onClick={handleRefreshEmail}>
                  Змінити e-mail
                </ButtonRefresh>
                {!values.email && <Placeholder>email</Placeholder>}
                {errors.email && touched.email && (
                  <TextError>{errors.email}</TextError>
                )}
              </Label>

              <Label>
                <FieldStyled
                  disabled={true}
                  error={errors.password && touched.password && errors.password}
                  type={'password'}
                  name="password"
                  onChange={e => {
                    error = null;
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  required
                />
                <ButtonRefresh type="button" onClick={handleRefreshPassword}>
                  Змінити пароль
                </ButtonRefresh>
                {!values.password && <Placeholder>Пароль</Placeholder>}
                {errors.password && touched.password && (
                  <TextError>{errors.password}</TextError>
                )}
                {error?.status === 401 && (
                  <TextError>Електронна пошта або пароль неправильні</TextError>
                )}
              </Label>

              <Label>
                <FieldStyled
                  error={errors.lastName && touched.lastName && errors.lastName}
                  type={'text'}
                  name="lastName"
                  onChange={e => {
                    error = null;
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  required
                />
                {!values.lastName && (
                  <Placeholder>
                    Прізвище <span>*</span>
                  </Placeholder>
                )}
                {errors.lastName && touched.lastName && (
                  <TextError>{errors.lastName}</TextError>
                )}
                {error?.status === 401 && (
                  <TextError>Електронна пошта або пароль неправильні</TextError>
                )}
              </Label>

              <Label>
                <FieldStyled
                  error={
                    errors.firstName && touched.firstName && errors.firstName
                  }
                  type={'text'}
                  name="firstName"
                  onChange={e => {
                    error = null;
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  required
                />
                {!values.firstName && (
                  <Placeholder>
                    Ім’я <span>*</span>
                  </Placeholder>
                )}
                {errors.firstName && touched.firstName && (
                  <TextError>{errors.firstName}</TextError>
                )}
                {error?.status === 401 && (
                  <TextError>Електронна пошта або пароль неправильні</TextError>
                )}
              </Label>

              <Label>
                <FieldStyled
                  error={
                    errors.patronymic && touched.patronymic && errors.patronymic
                  }
                  type={'text'}
                  name="patronymic"
                  onChange={e => {
                    error = null;
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  required
                />
                {!values.patronymic && <Placeholder>По-батькові</Placeholder>}
                {errors.patronymic && touched.patronymic && (
                  <TextError>{errors.patronymic}</TextError>
                )}
                {error?.status === 401 && (
                  <TextError>Електронна пошта або пароль неправильні</TextError>
                )}
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
                        <FieldStyled
                          as={PhoneInputField}
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
                        />

                        {phone === '' && (
                          <Placeholder type="tel">
                            +380 __ ___ ____ <span>*</span>
                          </Placeholder>
                        )}
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

              <ContactMethodLabel>
                <StyledLegend>Спосіб зв’язку *</StyledLegend>
                <RadioInputWrap>
                  <WrapInputRadio>
                    <StyledField
                      type="radio"
                      id="chat"
                      name="contactMethod"
                      value="chat"
                      component={Checkbox}
                    ></StyledField>

                    <RadioLabel htmlFor="chat">чат</RadioLabel>
                  </WrapInputRadio>
                  <WrapInputRadio>
                    <StyledField
                      type="radio"
                      id="telegramBot"
                      name="contactMethod"
                      value="telegramBot"
                      component={Checkbox}
                    />
                    <RadioLabel htmlFor="telegramBot">телеграм-бот</RadioLabel>
                  </WrapInputRadio>
                </RadioInputWrap>
              </ContactMethodLabel>
            </ImputWrap>

            <ButtonWrapper>
              <StyledButton type="button" onClick={() => handleRemoveAccount()}>
                <IconRemove /> Видалити акаунт
              </StyledButton>
              <Button type="submit">Зберегти</Button>
            </ButtonWrapper>
          </FormStyledPatient>
        );
      }}
    </Formik>
  );
};

export default FormPatientPage;
