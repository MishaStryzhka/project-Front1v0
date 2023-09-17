import { StyledBtn, StyledNavLink } from './HeaderButton.styled';

const HeaderButton = ({
  className,
  type,
  disabled,
  onClick,
  to,
  children,
  id,
}) => {
  return type === 'link' ? (
    <StyledNavLink
      className={className}
      type={type}
      to={to}
      children={children}
      id={id}
    >
      {children}
    </StyledNavLink>
  ) : (
    <StyledBtn
      className={className}
      onClick={() => onClick()}
      type={type}
      children={children}
      id={id}
    >
      {children}
    </StyledBtn>
  );
};

export default HeaderButton;
