import { styled } from 'styled-components';

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.secondary};
  text-align: center;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
