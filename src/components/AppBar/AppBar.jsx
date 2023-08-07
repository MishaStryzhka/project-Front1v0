import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import {
  NavContainer,
  StyleBtn,
  StyledAppBar,
  StyledContainer,
  UserBox,
} from './AppBar.styled';
import Btn from 'components/Btn/Btn';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Container } from 'components/Container/Container';

export const AppBar = ({ isOpenMenu, setIsOpenMenu }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const hendlelogout = () => {
    dispatch(logOut());
  };

  return (
    <StyledAppBar>
      <StyledContainer>
        <Btn size="normal" text="Menu" />
        <p>header</p>

        <UserBox>
          {isLoggedIn && (
            <StyleBtn
              isOpenMenu={isOpenMenu}
              size="small"
              text={'Log out'}
              icon={'Iconlogout'}
              onClick={hendlelogout}
            />
          )}
          {isLoggedIn ? (
            <UserMenu isOpenMenu={isOpenMenu} />
          ) : (
            <AuthNav isOpenMenu={isOpenMenu} />
          )}
        </UserBox>
      </StyledContainer>
    </StyledAppBar>

    // <StyledAppBar>
    //   <StyledContainer>
    //     <p>logo</p>

    //     <NavContainer id="navContainer" isOpenMenu={isOpenMenu}>
    //       <UserBox>
    //         {isLoggedIn && (
    //           <StyleBtn
    //             isOpenMenu={isOpenMenu}
    //             size="small"
    //             text={'Log out'}
    //             icon={'Iconlogout'}
    //             onClick={hendlelogout}
    //           />
    //         )}
    //         {isLoggedIn ? (
    //           <UserMenu isOpenMenu={isOpenMenu} />
    //         ) : (
    //           <AuthNav isOpenMenu={isOpenMenu} />
    //         )}
    //       </UserBox>
    //     </NavContainer>

    //     {/* <ButtonMenu
    //       isOpenMenu={isOpenMenu}
    //       onClick={toggleMenu}
    //       id="btnNavMenu"
    //       title="close modal"
    //     >
    //       {isOpenMenu ? (
    //         <IconCrossBig
    //           pointerEvents="none"
    //           fill={theme[currentTheme].color.primary}
    //         />
    //       ) : (
    //         <IconMenuHamburger
    //           pointerEvents="none"
    //           fill={theme[currentTheme].color.primary}
    //         />
    //       )}
    //     </ButtonMenu> */}
    //   </StyledContainer>
    // </StyledAppBar>
  );
};
