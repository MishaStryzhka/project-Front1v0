import CropperWrap from 'components/CropperWrap/CropperWrap';
import Modal from 'componentsReusable/Modal/Modal';
import Title from 'componentsReusable/Titles/Title/Title';
import { StyledButtonWrapper } from '../ModalRemoveAccount/ModalRemoveAccount.styled';
import SecondaryButton from 'componentsReusable/Buttons/SecondaryButton/SecondaryButton';

const ModalAddAvatar = ({ avatar, setFieldValue, setIsOpenModalAddAvatar }) => {
  return (
    <Modal
      onClick={() => {
        setIsOpenModalAddAvatar(false);
      }}
    >
      <Title type="modal">Додати зображення профілю</Title>

      <CropperWrap
        image={avatar}
        name="avatar"
        setImage={e => setFieldValue('avatarUrl', e)}
        onClose={() => setIsOpenModalAddAvatar(false)}
      />
    </Modal>
  );
};

export default ModalAddAvatar;
