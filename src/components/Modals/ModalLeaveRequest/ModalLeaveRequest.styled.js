import Title from 'componentsReusable/Titles/Title/Title';
import { styled } from 'styled-components';

export const Box = styled.div``;

export const InputWrap = styled.div`
  padding-top: 40px;

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
`;

export const ListDate = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const WrapDate = styled.li`
  display: flex;
  justify-content: space-between;
`;
export const Label = styled.div`
  position: relative;
`;
