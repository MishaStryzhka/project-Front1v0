import * as Yup from 'yup';

export const validationCommunication = Yup.object().shape({
  communicationWithDoctor: Yup.array()
    .required('Це поле обов`язкове')
    .min(1, 'Оберіть хоча б один спосіб зв`язку з лікарем')
    .of(Yup.string().oneOf(['telegramBot', 'chatBotOnTheSite'])),
  howApplicationsAreReceived: Yup.array()
    .required('Це поле обов`язкове')
    .min(1, 'Оберіть хоча б один спосіб отримання заявок')
    .of(Yup.string().oneOf(['telegramBot', 'chatBotOnTheSite', 'email'])),
});
