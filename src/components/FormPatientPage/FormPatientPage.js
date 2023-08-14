import {
  Button,
  FieldStyled,
  FormStyled,
  ImputWrap,
  Label,
  TextError,
} from 'components/FormLogin/FormLogin.styled';
import PhoneInputField from 'components/PhoneImput/PhoneInput';
import { Field, Formik } from 'formik';
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
} from './FormPatientPage.styled';
import Checkbox from 'components/Checkbox/Checkbox';
import IconCheckbox from 'images/icons/IconCheckbox';
import IconCheckboxChack from 'images/icons/IconCheckboxChack';
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

  const handleAddPhoneNumber = () => {
    console.log('add phone number');
  };

  const handleRemoveAccount = () => {
    return 'Remove account';
  };

  return (
    <Formik
      initialValues={{
        email: user.email,
        password: '',
        lastName: '',
        firstName: '',
        patronymic: '',
        phone: [],
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

              <Label>
                <FieldStyled
                  as={PhoneInputField}
                  field={{ name: 'phone1', value: values.phone1 }}
                  form={{ setFieldValue }}
                />
                {!values.phone1 && (
                  <Placeholder type="tel">
                    +380 __ ___ ____ <span>*</span>
                  </Placeholder>
                )}
                <ButtonRefresh type="button" onClick={handleAddPhoneNumber}>
                  + Додати номер телефону
                </ButtonRefresh>
              </Label>

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
              <StyledButton type="button" onClick={handleRemoveAccount}>
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
