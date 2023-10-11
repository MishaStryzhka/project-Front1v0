import * as Yup from 'yup';

export const validationPatientPageScheme = Yup.object().shape({
  firstName: Yup.string()
    .matches(
      // eslint-disable-next-line no-useless-escape
      `^(?!.*[ЪЫЭъыэ])[а-яА-ЯіїєґІЇЄҐ -')]+$`,
      'Введено недопустимі символи. Введіть ім’я українською мовою.'
    )
    .required("Поле обов'язкове")
    .max(64, 'Ім’я має бути менше 64 символів'),
  lastName: Yup.string()
    .matches(
      // eslint-disable-next-line no-useless-escape
      `^(?!.*[ЪЫЭъыэ])[а-яА-ЯіїєґІЇЄҐ -')]+$`,
      'Введено недопустимі символи. Введіть різвище українською мовою.'
    )
    .required('Поле обов`язкове')
    .max(64, 'Прізвище має бути менше 64 символів'),
  patronymic: Yup.string()
    .matches(
      // eslint-disable-next-line no-useless-escape
      `^(?!.*[ЪЫЭъыэ])[а-яА-ЯіїєґІЇЄҐ -')]+$`,
      'Введено недопустимі символи. Введіть по-батькові українською мовою.'
    )
    .max(64, 'По-батькові має бути менше 64 символів'),
  phones: Yup.array().of(
    Yup.string()
      .required('Поле обов`язкове')
      .test(
        'is-unique',
        'Усі елементи мають бути унікальними',
        function (value) {
          // Використовуємо Set для визначення унікальних значень у масиві
          const uniqueValues = [...new Set(value)];
          return value.length !== 0
            ? true
            : uniqueValues.length === value.length;
        }
      )
      .matches(
        // eslint-disable-next-line no-useless-escape
        '^\\+\\d{12}$',
        'Введено недійсний номер телефону. Переконайтеся, що ви ввели його у правильному форматі.'
      )
  ),
  dateOfBirthday: Yup.date()
    .min(
      new Date('1900-01-01'),
      'Будь ласка, введіть коректний рік народження.'
    )
    .max(new Date(), 'Будь ласка, введіть коректний рік народження.'),
  contactMethods: Yup.array().of(
    Yup.string().oneOf(
      ['chat', 'telegramBot'],
      'Метод має бути "чат" або "телеграм-бот"'
    )
  ),
});
