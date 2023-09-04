import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.secondary};
  text-align: center;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  width: 220px;
  height: 50px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.btnLight};

  &.active {
    background-color: ${({ theme }) => theme.color.btnDark};
  }
`;
