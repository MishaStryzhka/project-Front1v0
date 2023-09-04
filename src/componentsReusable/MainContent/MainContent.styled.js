import { styled } from 'styled-components';

export const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  width: 1140px;
  height: 100%;

  border-top-left-radius: 40px;

  background: ${({ theme }) => theme.color.primary};

  padding: 0 170px;
`;
