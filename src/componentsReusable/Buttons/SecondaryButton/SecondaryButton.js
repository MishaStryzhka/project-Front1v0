import { Button } from './SecondaryButton.styled';

//=============================
// $styledType: 'green', 'rose'

const SecondaryButton = ({
  $styledType = 'green',
  children,
  disabled = false,
  type = 'button',
  onClick,
  form,
}) => {
  return (
    <Button
      form={form}
      type={type}
      $styledType={$styledType}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
