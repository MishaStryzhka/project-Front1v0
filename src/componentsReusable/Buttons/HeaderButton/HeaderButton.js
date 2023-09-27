import { StyledBtn, StyledNavLink } from './HeaderButton.styled';

const HeaderButton = ({
  className,
  type,
  disabled,
  onClick,
  to,
  children,
  id,
  active,
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
      active={active}
    >
      {children}
    </StyledBtn>
  );
};

export default HeaderButton;
