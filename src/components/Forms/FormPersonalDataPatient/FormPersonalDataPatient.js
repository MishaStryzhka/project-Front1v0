import {
  FieldStyled,
  FormStyled,
  ImputWrap,
  Label,
  TextError,
} from 'components/Forms/FormLogin/FormLogin.styled';
import PhoneInputField from 'components/PhoneImput/PhoneInput';
import { Formik } from 'formik';
import { useAuth } from 'hooks';
import { validationPatientPageSchema } from 'schemas';
import {
  ButtonRefresh,
  ContactMethodLabel,
  FormStyledPatient,
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

const FormPersonalDataPatient = ({ setOnChange }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  let { error } = useAuth();

  const onSubmit = value => {
    const { lastName, firstName, patronymic, phones, contactMethods } = value;

    console.log(
      'value',
      lastName,
      firstName,
      patronymic,
      phones,
      contactMethods
    );

    dispatch(
      updateUserInfo({
        lastName,
        firstName,
        patronymic,
        phones,
        contactMethods,
      })
    );
  };

  console.log('user.contactMethods', user.contactMethods);

  return (
    <Formik
      initialValues={{
        lastName: user.lastName || '',
        firstName: user.firstName || '',
        patronymic: user.patronymic || '',
        phones: user.phones || [],
        contactMethods: user.contactMethods || [],
      }}
      validationSchema={validationPatientPageSchema}
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
        console.log('values.contactMethods', values);

        return (
          <FormStyledPatient
            id="formPersonalDataPatient"
            as={FormStyled}
            // onSubmit={handleSubmit}
          >
            <ImputWrap>
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
                    Прізвище <span> (обов’язкове поле)</span>
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
                    Ім’я <span> (обов’язкове поле)</span>
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
                          field={{
                            name: 'phones',
                            // value: phone ? `+${phone}` : '',
                            value: phone,
                          }}
                          setFieldValue={value => {
                            console.log('value', value.slice(1, 13));

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
                            +380 __ ___ ____ <span> (обов’язкове поле)</span>
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
                <StyledLegend>
                  Спосіб зв’язку <span>(обов’язкове поле)</span>
                </StyledLegend>
                <RadioInputWrap>
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
                      component={Checkbox}
                    />
                    <RadioLabel htmlFor="telegramBot">телеграм-бот</RadioLabel>
                  </WrapInputRadio>
                </RadioInputWrap>
              </ContactMethodLabel>
            </ImputWrap>
          </FormStyledPatient>
        );
      }}
    </Formik>
  );
};

export default FormPersonalDataPatient;
