import {
  AuthNavContainer,
  // StyledIconPawprint,
  StyledNavLink,
} from './AuthNav.styled';
// import { useAuth } from 'hooks';
// import theme from 'components/theme';
// import IconPawprint1 from 'images/icons/IconPawprint1';

export const AuthNav = ({ isOpenMenu }) => {
  // const { currentTheme } = useAuth();

  return (
    <AuthNavContainer isOpenMenu={isOpenMenu}>
      <StyledNavLink dark={'true'} to="/login">
        <span style={{ marginRight: 8 }}>Log In</span>
        {/* <IconPawprint1 fill={theme[currentTheme].color.background} /> */}
      </StyledNavLink>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      {/* <StyledNavLink to="/user">user</StyledNavLink> */}
    </AuthNavContainer>
  );
};
