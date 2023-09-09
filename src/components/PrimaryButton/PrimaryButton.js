import { Button } from './PrimaryButton.styled';

const PrimaryButton = ({
  children,
  disabled = false,
  type = 'button',
  onClick,
  className,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
