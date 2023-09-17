import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const StyledLogo = styled.p`
  color: var(--White, #fff);
  text-align: center;
  font-family: Rubik;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
