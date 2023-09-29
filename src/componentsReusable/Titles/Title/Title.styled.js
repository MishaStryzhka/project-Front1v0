import styled from 'styled-components';

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-style: normal;
  line-height: normal;

  ${({ type }) =>
    (type === 'page' &&
      `font-size: 40px;
    font-weight: 600;`) ||
    (type === 'modal' &&
      `font-size: 30px;
    font-weight: 400;
    text-align: center;`) ||
    `font-size: 30px;
    font-weight: 600;`}
`;
