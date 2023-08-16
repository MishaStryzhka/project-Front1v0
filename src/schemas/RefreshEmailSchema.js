import * as Yup from 'yup';

export const validationRefreshEmailSchema = Yup.object().shape({
  email: Yup.string()
    .required('Поле обов`язкове')
    .email('Введіть дійсну адресу електронної пошти'),
  newEmail: Yup.string()
    .required('Поле обов`язкове')
    .email('Введіть дійсну адресу електронної пошти'),
});
