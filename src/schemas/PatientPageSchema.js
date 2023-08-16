import * as Yup from 'yup';

export const validationPatientPageSchema = Yup.object().shape({
  email: Yup.string()
    .required('Поле обов`язкове')
    .email('Введіть дійсну адресу електронної пошти'),
  password: Yup.string()
    .required('Поле обов`язкове')
    .min(8, 'Пароль має бути не менше 8 символів')
    .max(32, 'Пароль має бути менше 32 символів')
    .matches(
      /^(?=.*[A-Z])(?=.*\d).{8,16}$/,
      'Пароль повинен містити мінімум 8 латинських символів, одну велику літеру, одну цифру'
    ),
  firstName: Yup.string()
    .required('Поле обов`язкове')
    .max(64, 'Пароль має бути менше 64 символів'),
  lastName: Yup.string()
    .required('Поле обов`язкове')
    .max(64, 'Пароль має бути менше 64 символів'),
  patronymic: Yup.string().max(64, 'Пароль має бути менше 64 символів'),
  phones: Yup.array().of(
    Yup.string()
      .required('Поле обов`язкове')
      .max(13, 'Номер має бути менше 13 символів')
  ),
  contactMethod: Yup.string(),
});
