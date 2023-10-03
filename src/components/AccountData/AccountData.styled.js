import { ImputWrap } from 'components/Forms/FormLogin/FormLogin.styled';
import { styled } from 'styled-components';

export const StyledImputWrap = styled(ImputWrap)`
  padding-top: 0;
`;

export const ButtonWrapper = styled.div`
  padding-top: 40px;
  margin: 0 auto;

  width: 800px;

  display: flex;
  justify-content: space-between;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonRefresh = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;

  // padding-top: 10px;

  color: ${({ theme, disabled }) =>
    disabled ? theme.color.placeholder : theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  text-decoration-line: underline;

  &:hover {
  }
`;
