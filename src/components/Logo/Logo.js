import IconLogo from 'images/icons/IconLogo';
import { StyledNavLink } from './Logo.styled';

export const Logo = () => {
  return (
    <StyledNavLink to="/main">
      <IconLogo />
    </StyledNavLink>
  );
};

export default Logo;
