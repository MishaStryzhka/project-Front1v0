import Btn from 'components/Btn/Btn';
import { NavContainer, StyledAppBar, StyledContainer } from './AppBar.styled';
import Logo from 'components/Logo/Logo';
import FormSearch from 'components/FormSearch/FormSearch';
import IconUser from 'images/icons/IconUser';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import { useAuth } from 'hooks';
import { useState } from 'react';
import ModalLeaveRequest from 'components/ModalLeaveRequest/ModalLeaveRequest';

export const AppBar = ({ isOpenMenu, setIsOpenMenu }) => {
  const [isOpenModalLeaveRequest, setIsOpenModalLeaveRequest] = useState(false);

  const { user } = useAuth();

  return (
    <>
      <StyledAppBar>
        <StyledContainer>
          <NavContainer>
            <Logo />
            {user?.userType !== 'doctor' && (
              <Btn
                onClick={() => setIsOpenModalLeaveRequest(true)}
                text="Залишити заявку"
              />
            )}
            <Btn to="/directionsList" type="link" text="Спеціалісти" />
            <Btn to="/problemsList" type="link" text="Проблеми" />
            <FormSearch />
            <Btn id="btnOpenBurgerMenu" onClick={() => setIsOpenMenu(true)}>
              <IconUser />
            </Btn>
          </NavContainer>
          {isOpenMenu && <BurgerMenu setIsOpenMenu={setIsOpenMenu} />}
        </StyledContainer>
      </StyledAppBar>
      {isOpenModalLeaveRequest && (
        <ModalLeaveRequest onClick={() => setIsOpenModalLeaveRequest(false)} />
      )}
    </>
  );
};
