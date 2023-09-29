import { NavWrap, StyledAppBar, StyledContainer } from './AppBar.styled';
import Logo from 'components/Logo/Logo';
import FormSearch from 'components/Forms/FormSearch/FormSearch';
import IconUser from 'images/icons/IconUser';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import { useAuth } from 'hooks';
import { useState } from 'react';
import ModalLeaveRequest from 'components/ModalLeaveRequest/ModalLeaveRequest';
import HeaderButton from 'componentsReusable/Buttons/HeaderButton/HeaderButton';
import UserBtn from 'components/UserBtn/UserBtn';

export const AppBar = ({ isOpenMenu, setIsOpenMenu }) => {
  const [isOpenModalLeaveRequest, setIsOpenModalLeaveRequest] = useState(false);

  const { user } = useAuth();

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
            <UserBtn
              id="btnOpenBurgerMenu"
              onClick={() => {
                setIsOpenMenu(true);
              }}
              active={isOpenMenu}
            >
              <IconUser />
            </UserBtn>
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
