import * as Yup from 'yup';

export const validationRefreshPasswordSchema = Yup.object().shape({
  password: Yup.string().required('Поле обов`язкове'),
  newPassword: Yup.string()
    .required('Поле обов`язкове')
    .min(8, 'Пароль має бути не менше 8 символів')
    .max(32, 'Пароль має бути менше 32 символів')
    .matches(
      /^(?=.*[A-Z])(?=.*\d).{8,16}$/,
      'Пароль повинен містити мінімум 8 латинських символів, одну велику літеру, одну цифру'
    ),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Паролі повинні збігатися')
    .required('Поле обов`язкове'),
});
