import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  background: ${({ dark, theme }) =>
    dark === 'true' ? theme.color.primary : 'transparent'};
  color: ${({ dark, theme }) =>
    dark === 'true' ? theme.color.background : theme.color.primary};
  border: 2px solid ${({ theme }) => theme.color.primary};

  display: flex;
  justify-content: center;
  min-width: 125px;
  padding: 8px 20px;

  border-radius: 25px;

  text-decoration: none;
  text-align: center;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  @media screen and (min-width: 768px) {
    // width: 768px;
  }

  @media screen and (min-width: 1280px) {
    // width: 1280px;
  }
`;

export const AuthNavContainer = styled.nav`
  ${({ isOpenMenu }) =>
    isOpenMenu
      ? `
      display: grid;
      // grid-template-columns: 1fr 1fr;
      row-gap: 12px;
      margin-top: 82px;
  `
      : `
    display: none;
    `}

  @media screen and (min-width: 768px) {
    ${({ isOpenMenu }) =>
      isOpenMenu
        ? `
      display: grid;
      // grid-template-columns: 1fr 1fr;
      row-gap: 12px;
      margin-top: 82px;
  `
        : `
      display: flex;
      column-gap: 20px;
    `}
  }

  @media screen and (min-width: 1280px) {
    // width: 1280px;
    display: flex;
    column-gap: 20px;
  }
`;
