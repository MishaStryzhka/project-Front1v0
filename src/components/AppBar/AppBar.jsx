import { NavWrap, StyledAppBar, StyledContainer } from './AppBar.styled';
import Logo from 'components/Logo/Logo';
import FormSearch from 'components/FormSearch/FormSearch';
import IconUser from 'images/icons/IconUser';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import { useAuth } from 'hooks';
import { useState } from 'react';
import ModalLeaveRequest from 'components/ModalLeaveRequest/ModalLeaveRequest';
import HeaderButton from 'componentsReusable/Button/HeaderButton/HeaderButton';

export const AppBar = ({ isOpenMenu, setIsOpenMenu }) => {
  const [isOpenModalLeaveRequest, setIsOpenModalLeaveRequest] = useState(false);

  const { user } = useAuth();

  console.log('isOpenMenu', isOpenMenu);

  return (
    <>
      <StyledAppBar>
        <StyledContainer>
          <Logo />
          <NavWrap>
            {user?.userType !== 'doctor' && (
              <HeaderButton onClick={() => setIsOpenModalLeaveRequest(true)}>
                Залишити заявку
              </HeaderButton>
            )}
            <HeaderButton to="/directionsList" type="link">
              Спеціалісти
            </HeaderButton>
            <HeaderButton to="/problemsList" type="link">
              Скарги
            </HeaderButton>
            <FormSearch />
            <HeaderButton
              id="btnOpenBurgerMenu"
              onClick={() => {
                console.log('qqq');
                setIsOpenMenu(true);
              }}
            >
              <IconUser />
            </HeaderButton>
          </NavWrap>
          {isOpenMenu && <BurgerMenu setIsOpenMenu={setIsOpenMenu} />}
        </StyledContainer>
      </StyledAppBar>
      {isOpenModalLeaveRequest && (
        <ModalLeaveRequest onClick={() => setIsOpenModalLeaveRequest(false)} />
      )}
    </>
  );
};
