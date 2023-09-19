import { StyledUserBtn } from './UserBtn.styled';

const UserBtn = ({ id, children, onClick }) => {
  return (
    <StyledUserBtn id={id} onClick={() => onClick()}>
      {children}
    </StyledUserBtn>
  );
};

export default UserBtn;
