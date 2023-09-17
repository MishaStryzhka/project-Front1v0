import { StyledLogo, StyledNavLink } from './Logo.styled';

export const Logo = () => {
  return (
    <StyledNavLink to="/">
      <StyledLogo>DentistPortal</StyledLogo>
    </StyledNavLink>
  );
};

export default Logo;
