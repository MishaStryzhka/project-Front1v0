import { useAuth } from 'hooks';
import {
  BurgerMenuContainer,
  StyledBtnLogOut,
  StyledNavLink,
} from './BurgerMenu.styled';

const BurgerMenu = ({ setIsOpenModalSignOut }) => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <BurgerMenuContainer>
        {isLoggedIn ? (
          <>
            <StyledNavLink to="user/accountData">Мій профіль</StyledNavLink>
            <StyledBtnLogOut onClick={() => setIsOpenModalSignOut(true)}>
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
    </>
  );
};

export default BurgerMenu;
