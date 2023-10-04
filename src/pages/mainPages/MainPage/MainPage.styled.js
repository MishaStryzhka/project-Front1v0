import Container from 'componentsReusable/Container/Container';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Hero = styled.section`
  height: 200px;
  background-color: ${({ theme }) => theme.color.main};
`;

export const StyledHeroContainer = styled(Container)`
  padding: 0 93px 40px;

  display: flex;
  align-items: center;
  gap: 180px;
  box-sizing: border-box;
`;

export const TitleHero = styled.h1`
  color: ${({ theme }) => theme.color.primary};

  font-family: ${({ theme }) => theme.color.fontFamily};
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StyledContainer = styled(Container)`
  padding: 40px 120px;
  box-sizing: border-box;
`;
export const About = styled.section`
  color: ${({ theme }) => theme.color.text};

  font-family: ${({ theme }) => theme.color.fontFamily};
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 40px;

  border-radius: 20px;

  background: ${({ theme }) => theme.color.background1};
`;

export const NavContainer = styled.ul`
  padding-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  color: ${({ theme }) => theme.color.text};

  font-family: ${({ theme }) => theme.color.fontFamily};
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const NavItem = styled.li``;
export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  padding: 40px;

  border-radius: 20px;
  display: flex;
  gap: 80px;

  background: ${({ theme }) => theme.color.background1};
`;

export const Img = styled.img`
  ${({ width }) => `width: ${width}px`};
  ${({ height }) => `height: ${height}px`};
`;
