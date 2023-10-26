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
  to,
  state,
}) => {
  return (
    <Button
      form={form}
      type={type}
      $styledType={$styledType}
      onClick={onClick}
      disabled={disabled}
      to={to}
      state={state}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
