import { useAuth } from 'hooks';
import { UserName, Wrapper } from './UserMenu.styled';
// import IconUser from 'images/icons/IconUser1';
// import theme from 'components/theme';
import { NavLink } from 'react-router-dom';

export const UserMenu = ({ isOpenMenu }) => {
  const { user } = useAuth();

  return (
    <NavLink to="/user">
      <Wrapper isOpenMenu={isOpenMenu}>
        {/* <IconUser fill={theme[currentTheme].color.primary} /> */}
        <UserName isOpenMenu={isOpenMenu}>{user.name}</UserName>
      </Wrapper>
    </NavLink>
  );
};
