import * as Yup from 'yup';

export const validationPatientPageScheme = Yup.object().shape({
  firstName: Yup.string()
    .required('Поле обов`язкове')
    .max(64, 'Ім’я має бути менше 64 символів'),
  lastName: Yup.string()
    .required('Поле обов`язкове')
    .max(64, 'Прізвище має бути менше 64 символів'),
  patronymic: Yup.string().max(64, 'По-батькові має бути менше 64 символів'),
  phones: Yup.array().of(
    Yup.string()
      .required('Поле обов`язкове')
      .max(13, 'Номер має бути менше 13 символів')
  ),
  contactMethods: Yup.array().of(
    Yup.string().oneOf(
      ['chat', 'telegramBot'],
      'Метод має бути "чат" або "телеграм-бот"'
    )
  ),
});
