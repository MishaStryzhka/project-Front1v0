import { styled } from 'styled-components';

export const StyledPageContainer = styled.div`
  position: relative;

  display: flex;
  height: 100%;

  background-color: ${({ theme }) => theme.color.background};
`;
