import Modal from 'componentsReusable/Modal/Modal';
import { TitleModal } from '../ModalRefreshEmail/ModalRefreshEmail.styled';
import { useDispatch } from 'react-redux';
import { deleteAccount, refreshPassword } from 'redux/auth/operations';
import SecondaryButton from 'componentsReusable/Buttons/SecondaryButton/SecondaryButton';
import { StyledButtonWrapper } from './ModalDeleteAccount.styled';

const ModalDeleteAccount = ({ setIsOpenModal }) => {
  const dispatch = useDispatch();

  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
  };

  return (
    <Modal onClick={() => setIsOpenModal(null)}>
      <TitleModal>Видалити акаунт?</TitleModal>

      <StyledButtonWrapper>
        <SecondaryButton onClick={() => setIsOpenModal(null)}>
          Скасувати
        </SecondaryButton>
        <SecondaryButton
          $styledType="rose"
          onClick={() => handleDeleteAccount()}
        >
          Видалити
        </SecondaryButton>
      </StyledButtonWrapper>
    </Modal>
  );
};

export default ModalDeleteAccount;
