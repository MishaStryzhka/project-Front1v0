import { Suspense, useState } from 'react';
import { ContainerLayout, StuledContainer } from './SharedLayout.style';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(null);

  const closeMenu = e => {
    if (e.target.id !== 'btnOpenBurgerMenu') {
      setIsOpenMenu(false);
    }
  };

  return (
    <>
      <ContainerLayout onClick={closeMenu}>
        <AppBar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        <StuledContainer>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </StuledContainer>
      </ContainerLayout>
    </>
  );
};

export default SharedLayout;
