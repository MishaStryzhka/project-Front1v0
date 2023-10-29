import Checkbox from 'components/Checkbox/Checkbox';
import Form from 'components/Forms/Form/Form';
import { FieldCheckboxStyled } from 'components/Forms/FormLogin/FormLogin.styled';
import MainContent from 'componentsReusable/MainContent/MainContent';
import { Formik } from 'formik';
import {
  LabelCheckbox,
  StyledButtonWrapper,
  TextCheckbox,
} from './Chat.styled';
import SecondaryButton from 'componentsReusable/Buttons/SecondaryButton/SecondaryButton';
import { Notify } from 'components/PersonalData/PersonalData.styled';
import IconDone from 'images/icons/IconDone';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/auth/operations';
import { validationChat } from 'schemas';

const Chat = () => {
  let { response, error, user } = useAuth();
  const dispatch = useDispatch();

  const onSubmit = ({ receiveNotificationsAboutNewMessagesOnTheEmail }) => {
    dispatch(
      updateUserInfo({
        receiveNotificationsAboutNewMessagesOnTheEmail,
      })
    );
  };
  return (
    <div>
      <MainContent width={'800px'}>
        <Formik
          initialValues={{
            receiveNotificationsAboutNewMessagesOnTheEmail:
              user.receiveNotificationsAboutNewMessagesOnTheEmail || false,
          }}
          validationSchema={validationChat}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            setFieldValue,
            setFieldTouched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            return (
              <Form id="formChat">
                <LabelCheckbox>
                  <FieldCheckboxStyled
                    type={'checkbox'}
                    id="receiveNotificationsAboutNewMessagesOnTheEmail"
                    name="receiveNotificationsAboutNewMessagesOnTheEmail"
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    component={Checkbox}
                  />
                  <TextCheckbox htmlFor="receiveNotificationsAboutNewMessagesOnTheEmail">
                    Отримувати сповіщення про нові повідомлення у чаті на
                    електронну скриньку
                  </TextCheckbox>
                </LabelCheckbox>
              </Form>
            );
          }}
        </Formik>
      </MainContent>
      <StyledButtonWrapper>
        <SecondaryButton $styledType="green" type="submit" form="formChat">
          Зберегти
        </SecondaryButton>
      </StyledButtonWrapper>
      {response && (
        <Notify $show={response.status === 200}>
          <IconDone width="22px" height="22px" /> Дані збережено
        </Notify>
      )}
      {error && <Notify $show>!!! Щось пішло не так !!!</Notify>}
    </div>
  );
};

export default Chat;
