import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  &:hover {
    font-weight: 500;
  }
`;

export const StyledBtn = styled.button`
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;

  display: flex;
  min-width: 40px;
  min-height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  > svg {
    pointer-events: none;
    fill: ${({ theme }) => theme.color.primary};
  }

  &:hover {
    font-weight: 500;
  }
`;
