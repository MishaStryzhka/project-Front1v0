import Btn from 'components/Btn/Btn';
import Container from 'components/Container/Container';
import styled from 'styled-components';

export const StyledAppBar = styled.header`
  background-color: ${({ theme }) => theme.color.main};
  // padding: 20px 0;
  // height: 280px;

  @media screen and (min-width: 768px) {
    // height: 44px;
    // padding: 24px 0;
  }

  @media screen and (min-width: 1440px) {
    height: 120px;
    // padding: 20px 0;
  }
`;

export const StyledContainer = styled(Container)`
  // box-sizing: border-box;
  // padding: 0 20px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  // position: relative;
  // z-index: 9;

  // @media screen and (min-width: 768px) {
  //   padding: 0 32px;
  // }

  // @media screen and (min-width: 1440px) {
  //   padding: 0 16px;
  // }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  column-gap: 40px;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  // row-gap: 24px;
  column-gap: 24px;
`;

export const ButtonMenu = styled.button`
  margin-left: 8px;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;

  width: 24px;
  height: 24px;

  // &:hover {
  //   box-shadow: ${({ theme }) => theme.boxShadow};
  // }

  // background: ${({ theme }) => theme.color.gradient};
  // box-shadow: ${({ theme }) => theme.boxShadowHover};

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const StyleBtn = styled(Btn)`
  @media screen and (max-width: 767px) {
    ${({ isOpenMenu }) =>
      isOpenMenu
        ? `
      position: absolute;
      left: 20px;
      bottom: 20px;
  `
        : `
      display: none;
      `};
  }

  @media screen and (min-width: 768px) {
    ${({ isOpenMenu }) =>
      isOpenMenu
        ? `
    position: absolute;
    right: 80px;
    top: 26px;
`
        : `
    display: none;
    `};
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    right: 131px;
    top: 0;
  }
`;
