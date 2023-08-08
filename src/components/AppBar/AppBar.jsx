// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import Btn from 'components/Btn/Btn';
import {
  NavContainer,
  // NavContainer,
  // StyleBtn,
  StyledAppBar,
  StyledContainer,
  // UserBox,
} from './AppBar.styled';
// import Btn from 'components/Btn/Btn';
// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
import BtnBack from 'components/BtnBack/BtnBack';
import Logo from 'components/Logo/Logo';
import FormSearch from 'components/FormSearch/FormSearch';
import IconUser from 'images/icons/IconUser';
// import { Container } from 'components/Container/Container';

export const AppBar = ({ isOpenMenu, setIsOpenMenu }) => {
  // const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  // const hendlelogout = () => {
  //   dispatch(logOut());
  // };

  return (
    <StyledAppBar>
      <StyledContainer>
        <BtnBack />

        <NavContainer>
          <Logo />
          <Btn to="/news" type="link" text="Залишити заявку" />
          <Btn to="/doctors" type="link" text="Спеціалісти" />
          <Btn to="/problems" type="link" text="Проблеми" />
          <FormSearch />
          <Btn to={isLoggedIn ? '/user' : '/login'} type="link">
            <IconUser />
          </Btn>
        </NavContainer>
      </StyledContainer>
    </StyledAppBar>
  );
};
