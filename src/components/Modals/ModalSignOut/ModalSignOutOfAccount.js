import Modal from 'componentsReusable/Modal/Modal';
import Title from 'componentsReusable/Titles/Title/Title';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { StyledButtonWrapper } from '../ModalRemoveAccount/ModalRemoveAccount.styled';
import SecondaryButton from 'componentsReusable/Buttons/SecondaryButton/SecondaryButton';

const ModalSignOut = ({ setIsOpenModal }) => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logOut());
  };

  return (
    <Modal onClick={() => setIsOpenModal()}>
      <Title type="modal">Вийти з аккаунта?</Title>

      <StyledButtonWrapper>
        <SecondaryButton onClick={() => setIsOpenModal(null)}>
          Скасувати
        </SecondaryButton>
        <SecondaryButton $styledType="rose" onClick={() => handleSignOut()}>
          Вийти
        </SecondaryButton>
      </StyledButtonWrapper>
    </Modal>
  );
};

export default ModalSignOut;
