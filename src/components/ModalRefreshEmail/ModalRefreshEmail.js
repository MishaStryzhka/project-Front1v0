import Modal from 'components/Modal/Modal';

const ModalRefreshEmail = ({ setIsOpenModal }) => {
  return (
    <Modal onClick={() => setIsOpenModal(null)}>
      <p>ModalRefreshEmail</p>
    </Modal>
  );
};

export default ModalRefreshEmail;
