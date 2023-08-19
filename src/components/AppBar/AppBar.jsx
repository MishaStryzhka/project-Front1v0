import Btn from 'components/Btn/Btn';
import { NavContainer, StyledAppBar, StyledContainer } from './AppBar.styled';
import Logo from 'components/Logo/Logo';
import FormSearch from 'components/FormSearch/FormSearch';
import IconUser from 'images/icons/IconUser';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

export const AppBar = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <StyledAppBar>
      <StyledContainer>
        <NavContainer>
          <Logo />
          <Btn to="/news" type="link" text="Залишити заявку" />
          <Btn to="/specialistDoctors" type="link" text="Спеціалісти" />
          <Btn to="/problems" type="link" text="Проблеми" />
          <FormSearch />
          <Btn id="btnOpenBurgerMenu" onClick={() => setIsOpenMenu(true)}>
            <IconUser />
          </Btn>
        </NavContainer>
        {isOpenMenu && <BurgerMenu setIsOpenMenu={setIsOpenMenu} />}
      </StyledContainer>
    </StyledAppBar>
  );
};
