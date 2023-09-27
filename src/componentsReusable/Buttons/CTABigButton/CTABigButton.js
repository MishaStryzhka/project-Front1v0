import { StyledButton } from './CTABigButton.styled';

const CTABigButton = ({
  className,
  type,
  disabled,
  onClick = () => {},
  to,
  children,
  id,
  active,
  form,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      className={className}
      onClick={() => onClick()}
      type={type}
      id={id}
      active={active}
      form={form}
    >
      {children}
    </StyledButton>
  );
};

export default CTABigButton;
