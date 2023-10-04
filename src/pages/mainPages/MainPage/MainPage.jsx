import { Helmet } from 'react-helmet';
import {
  About,
  Hero,
  Img,
  NavContainer,
  NavItem,
  StyledNavLink,
  StyledContainer,
  StyledHeroContainer,
  TitleHero,
} from './MainPage.styled';
import Loader from 'components/Loader/Loader';
import Image from 'images/Group.svg';
import rectangle from 'images/main/Rectangle.jpg';
import { useState } from 'react';
import ModalLeaveRequest from 'components/Modals/ModalLeaveRequest/ModalLeaveRequest';

const MainPage = () => {
  const [isOpenModalLeaveRequest, setIsOpenModalLeaveRequest] = useState(false);
  return (
    <>
      <Helmet>
        <title>Дантист портал</title>
      </Helmet>

      <Hero>
        <StyledHeroContainer>
          <Loader height={160} width={160} $urlImage={Image} />
          <TitleHero>Зроби свою посмішку здоровою! </TitleHero>
        </StyledHeroContainer>
      </Hero>
      <StyledContainer>
        <About>
          <p>
            Знайди свого стоматолога тут...
            <br />
            ...
            <br />
            ...
            <br />
            ...
          </p>
        </About>

        <NavContainer>
          <NavItem>
            <StyledNavLink to="problemsList">
              <Img src={rectangle} width="300" height="200" alt="" />
              <p>
                Доступний пошук лікарів за скаргами. Ви маєте можливість обрати
                те, що вас турбує - та потім обрати лікаря
              </p>
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="directionsList">
              <Img src={rectangle} width="300" height="200" alt="" />
              <p>Простий вибір лікарів за напрямком </p>
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink onClick={() => setIsOpenModalLeaveRequest(true)}>
              <Img src={rectangle} width="300" height="200" alt="" />
              <p>
                Ви маєте обмежений бюджет на лікування? Просто залиште свою
                заявку та лікар з вами зв’яжется
              </p>
            </StyledNavLink>
          </NavItem>
        </NavContainer>
      </StyledContainer>
      {isOpenModalLeaveRequest && (
        <ModalLeaveRequest onClick={() => setIsOpenModalLeaveRequest(false)} />
      )}
    </>
  );
};

export default MainPage;
