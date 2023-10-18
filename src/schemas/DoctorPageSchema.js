import * as Yup from 'yup';

const currentYear = new Date().getFullYear();

export const validationDoctorPageSchema = Yup.object().shape({
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
      'Введено недопустимі символи. Введіть прізвище українською мовою.'
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
  instagram: Yup.string().matches(
    /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_.]+\/?$/,
    'Введіть дійсний URL-адресу Instagram-профілю'
  ),
  tiktok: Yup.string().matches(
    /^(https?:\/\/)?(www\.)?tiktok\.com\/@[a-zA-Z0-9_.]+\/?$/,
    'Введіть дійсний URL-адресу TikTok-профілю'
  ),
  otherLink: Yup.string().url('Введіть дійсну URL-адресу'),
  paymentMethods: Yup.array().of(
    Yup.string().oneOf(
      ['cash', 'card'],
      'Спосіб має бути "готівковий розрахунок" або "оплата карткою"'
    )
  ),
  experienceYears: Yup.number()
    .required('Поле обов`язкове')
    .min(0, 'Мінімальний стаж роботи повинен бути не менше 0 років')
    .max(100, 'Максимальний стаж роботи повинен бути не більше 100 років'),
  educations: Yup.array().of(
    Yup.object().shape({
      id: Yup.string(), // ID - рядок, не обов'язковий
      name: Yup.string().max(
        120,
        'Назва освіти може містити максимум 120 символів.'
      ), // Назва освіти - рядок, не обов'язкова
      years: Yup.object().shape({
        begin: Yup.number()
          .required("Початковий рік є обов'язковим полем")
          .min(1990, 'Початковий рік повинен бути не раніше 1990')
          .max(
            currentYear,
            'Початковий рік не може бути пізніше поточного року'
          ),
        end: Yup.number()
          .nullable()
          .when('begin', (begin, schema) => {
            if (begin) {
              return schema.min(
                begin,
                'Рік закінчення не може бути меншим за початковий рік'
              );
            }
            return schema;
          }),
      }),
    })
  ),
});
