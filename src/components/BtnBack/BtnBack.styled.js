import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;

  margin: 0;
  padding: 0;
  background: none;
  position: relative;
  border: 0;
`;
