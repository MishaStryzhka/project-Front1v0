import { useAuth } from 'hooks';
import { Suspense, useState } from 'react';
import { ContainerLayout, StuledContainer } from './SharedLayout.style';
import { Helmet } from 'react-helmet';
import theme from 'theme';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(null);
  const { currentTheme } = useAuth();

  const closeMenu = e => {
    if (
      e.target.id !== 'btnNavMenu' &&
      e.target.id !== 'navMenu' &&
      e.target.id !== 'navContainer'
    ) {
      setIsOpenMenu(false);
    }
  };

  return (
    <>
      <ContainerLayout onClick={closeMenu}>
        {/* <Helmet>
          <style>{`body { background-color: ${theme[currentTheme].color.bodyColor}; }`}</style>
        </Helmet> */}
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
