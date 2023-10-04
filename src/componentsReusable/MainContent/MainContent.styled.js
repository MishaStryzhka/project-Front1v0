import { styled } from 'styled-components';

export const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;

  width: ${({ width }) => width};

  background: ${({ theme }) => theme.color.background1};
  border-radius: 20px;

  padding: ${({ $padding }) => $padding || '40px 90px'};
`;
