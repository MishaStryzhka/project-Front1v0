import { styled } from 'styled-components';

export const StyledSideBarPage = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  height: max-content;
  box-sizing: border-box;
  padding: 40px 50px;
  border-radius: 20px;

  background: ${({ theme }) => theme.color.background1};
`;
