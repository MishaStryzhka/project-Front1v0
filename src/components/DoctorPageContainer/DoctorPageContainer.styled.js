import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledDoctorPageContainer = styled.div`
  position: relative;

  display: flex;
  height: 100%;
`;

export const SideBarDoctor = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  background-color: ${({ theme }) => theme.color.background};

  box-sizing: border-box;
  width: 377px;
  padding: 81px 117px 81px 40px;
`;

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

export const MainContent = styled.div`
  position: absolute;
  right: 0;

  box-sizing: border-box;
  width: 1140px;
  height: 100%;

  border-top-left-radius: 40px;

  background: ${({ theme }) => theme.color.primary};

  padding: 0 170px;
`;
