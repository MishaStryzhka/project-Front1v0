import CTABigButton from 'componentsReusable/Buttons/CTABigButton/CTABigButton';
import Container from 'componentsReusable/Container/Container';
import MainContent from 'componentsReusable/MainContent/MainContent';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  padding-top: 80px;
  box-sizing: border-box;
`;

export const StyledMainContent = styled(MainContent)`
  padding: 40px;
  margin: 0 auto;
  gap: 40px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledCTABigButton = styled(CTABigButton)`
  margin: 40px auto 0;
`;

export const StyledResetPassword = styled.button`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;

  display: block;
  margin: 20px auto 0;

  cursor: pointer;
`;

export const WrapRegister = styled.p`
  color: ${({ theme }) => theme.color.text};

  display: flex;
  justify-content: center;

  margin-top: 20px;

  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledRegister = styled(NavLink)`
  text-decoration-line: underline;
  padding-left: 5px;
`;
