import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const BurgerMenuContainer = styled.div`
  position: absolute;
  bottom: -40px;

  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;

export const StyledNavLink = styled(NavLink)`
  box-sizing: border-box;

  display: flex;
  width: 120px;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.color.indicator};

  color: ${({ theme }) => theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledBtnLogOut = styled.button`
  box-sizing: border-box;

  display: flex;
  width: 120px;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.color.card};

  color: ${({ theme }) => theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
