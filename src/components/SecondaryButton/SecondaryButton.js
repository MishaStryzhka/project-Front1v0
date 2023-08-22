import { Button } from './SecondaryButton.styled';

const SecondaryButton = ({
  children,
  disabled = false,
  type = 'button',
  onClick,
}) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default SecondaryButton;
