import { styled } from 'styled-components';

export const Line = styled.div`
  width: 350px;
  height: 2px;
  background-color: ${({ theme }) => theme.color.main};
`;

export const LineText = styled.p`
  color: ${({ theme }) => theme.color.main};
  text-align: center;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
`;
