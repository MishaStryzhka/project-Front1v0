import Modal from 'componentsReusable/Modal/Modal';
import { useDispatch } from 'react-redux';
import { removeAccount } from 'redux/auth/operations';
import SecondaryButton from 'componentsReusable/Buttons/SecondaryButton/SecondaryButton';
import { StyledButtonWrapper } from './ModalRemoveAccount.styled';
import Title from 'componentsReusable/Titles/Title/Title';

const ModalRemoveAccount = ({ setIsOpenModal }) => {
  const dispatch = useDispatch();

  const handleRemoveAccount = () => {
    dispatch(removeAccount());
  };

  return (
    <Modal onClick={() => setIsOpenModal(null)}>
      <Title type="modal">Видалити акаунт?</Title>

      <StyledButtonWrapper>
        <SecondaryButton onClick={() => setIsOpenModal(null)}>
          Скасувати
        </SecondaryButton>
        <SecondaryButton
          $styledType="rose"
          onClick={() => handleRemoveAccount()}
        >
          Видалити
        </SecondaryButton>
      </StyledButtonWrapper>
    </Modal>
  );
};

export default ModalRemoveAccount;
