import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const ListProblemCategories = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const ItemProblemCategories = styled.li`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 1280px;
  margin: auto;
  padding: 40px 60px;
  border-radius: 20px;

  background: ${({ theme }) => theme.color.background1};
`;

export const StyledNavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
`;

export const StyledNavItem = styled.li`
  height: 100px;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background: ${({ theme }) => theme.color.primary};

  &:hover {
    background: ${({ theme }) => theme.color.secondaryColor};
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.text};
  text-align: center;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  width: 100%;
  height: 100%;
  // padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
