import Modal from 'components/Modal/Modal';

const ModalRefreshPassword = ({ setIsOpenModal }) => {
  return (
    <Modal onClick={() => setIsOpenModal(null)}>
      <p>ModalRefreshPassword</p>
    </Modal>
  );
};

export default ModalRefreshPassword;
