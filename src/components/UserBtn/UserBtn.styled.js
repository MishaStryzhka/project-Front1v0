import styled from 'styled-components';

export const StyledUserBtn = styled.button`
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;

  display: flex;
  min-width: 40px;
  min-height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  > svg {
    pointer-events: none;
    fill: ${({ theme }) => theme.color.primary};
  }

  &:hover {
    font-weight: 500;

    background-color: ${({ theme }) => theme.color.primary};
    > svg {
      fill: ${({ theme }) => theme.color.main};
      > path {
        stroke: ${({ theme }) => theme.color.main};
      }
    }
  }
  ${({ active, theme }) =>
    active &&
    `
  background-color: ${theme.color.primary};
    > svg {
      fill: ${theme.color.main};
      > path {
        stroke: ${theme.color.main};
      }
    }
  `}
`;
