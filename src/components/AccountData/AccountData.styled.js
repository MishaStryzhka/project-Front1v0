import { ImputWrap } from 'components/FormLogin/FormLogin.styled';
import { ButtonWrapper } from 'components/FormPatientPage/FormPatientPage.styled';
import { styled } from 'styled-components';

export const StyledImputWrap = styled(ImputWrap)`
  padding-top: 0;
`;

export const StyledButtonWrapper = styled(ButtonWrapper)`
  flex-direction: column;
  row-gap: 80px;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
