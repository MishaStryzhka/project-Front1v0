import * as Yup from 'yup';

export const validationChat = Yup.object().shape({
  receiveNotificationsAboutNewMessagesOnTheEmail: Yup.boolean().required(),
});
