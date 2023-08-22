import { Button } from './PrimaryButton.styled';

const PrimaryButton = ({
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

export default PrimaryButton;
