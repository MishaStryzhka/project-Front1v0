import { Title } from 'components/FormLogin/FormLogin.styled';
import { styled } from 'styled-components';

export const Box = styled.div``;

export const InputWrap = styled.div`
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const HoursWrap = styled.div`
  display: flex;
  column-gap: 40px;
  align-items: center;
`;

export const StyledTitle = styled(Title)`
  text-align: center;
  width: initial;
  padding-top: initial;
`;

export const ListDate = styled.ul``;

export const WrapDate = styled.li`
  display: flex;
  justify-content: space-between;
`;
