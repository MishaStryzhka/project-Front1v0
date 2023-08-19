import { useAuth } from 'hooks';
import {
  BurgerMenuContainer,
  StyledBtnLogOut,
  StyledNavLink,
} from './BurgerMenu.styled';
import { logOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const BurgerMenu = () => {
  const { isLoggedIn, userType } = useAuth();
  const dispatch = useDispatch();

  const hendlelogout = () => {
    dispatch(logOut());
  };
  return (
    <BurgerMenuContainer>
      {isLoggedIn ? (
        <>
          <StyledNavLink
            to={`/${userType === 'doctor' ? 'doctor/accountData' : 'patient'}/`}
          >
            Мій профіль
          </StyledNavLink>
          <StyledBtnLogOut onClick={() => hendlelogout()}>
            Вийти
          </StyledBtnLogOut>
        </>
      ) : (
        <>
          <>
            <StyledNavLink to="/login">Увійти</StyledNavLink>
            <StyledNavLink to="/register">Зареєструватися</StyledNavLink>
          </>
        </>
      )}
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
