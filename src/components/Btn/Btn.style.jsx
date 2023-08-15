import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBtn = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  position: relative;

  display: flex;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;

  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.primary};

  min-width: 40px;
  min-height: 40px;

  &:hover {
    // background: ${({ theme }) => theme.color.gradient};
    // color: ${({ theme }) => theme.color.background};
    cursor: pointer;
  }

  > svg {
    pointer-events: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;

  color: ${({ theme }) => theme.color.primary};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  height: 40px;
  padding: ${({ children }) => (children[1] ? '10px' : '10px 20px')};

  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.primary};

  &:hover {
    // background: ${({ theme }) => theme.color.gradient};
    // color: ${({ theme }) => theme.color.background};
  }
`;
