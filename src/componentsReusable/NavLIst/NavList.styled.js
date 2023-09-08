import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavList = styled.ul`
  margin-top: 80px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`;

export const StyledNavItem = styled.li`
  width: 400px;
  height: 160px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 2px solid var(--Main, #04827a);
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--Black, #000);
  text-align: center;

  font-family: Rubik;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
