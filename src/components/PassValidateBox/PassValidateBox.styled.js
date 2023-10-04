import { styled } from 'styled-components';

export const ValidateBox = styled.ul`
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
  // flex-direction: column;
  row-gap: 12px;
`;

export const ValidateBoxItem = styled.li`
  display: flex;
  column-gap: 5px;
  align-items: center;
`;

export const ValidateBoxText = styled.p`
  color: ${({ theme }) => theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
`;
