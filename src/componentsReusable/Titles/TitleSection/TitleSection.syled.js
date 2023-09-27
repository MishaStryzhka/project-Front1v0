import styled from 'styled-components';

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
