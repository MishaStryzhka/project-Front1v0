import styled from 'styled-components';

export const StyleBtn = styled.button`
  display: flex;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;

  ${({ size }) => {
    if (size === 'max') {
      return `width: 252px;
          height: 44px;
          padding: 8px 28px;
          gap: 10px;`;
    } else if (size === 'normal') {
      return `width: 165px;
          height: 44px;
          padding: 8px 20px;
          gap: 8px;
          font-weight: 700;
          `;
    } else if (size === 'small') {
      return `width: 135x;
          height: 44px;
          padding: 8px 20px;
          font-size: 16px;
          gap: 8px;
          font-size: 16px;
          font-weight: 700;`;
    } else if (size === 'round') {
      return `width: 84px;
          height: 84px;
          flex-direction: column-reverse;
          // padding: 8px 28px;
          gap: 4px;
          font-size: 12px;
          font-weight: 600;
          `;
    } else if (size === 'min') {
      return `width: 84px;
      flex-direction: row-reverse;
        height: 32px;
        padding: 2px 4px;
        gap: 4px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.48px;`;
    }
  }}

  justify-content: center;
  align-items: center;

  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.color.btnDark};

  ${({ theme, transparent }) =>
    !transparent
      ? `color: ${theme.color.background}; background: ${theme.color.btnDark}`
      : `color: ${theme.color.btnDark}; background-color: transparent;`};

  &:hover {
    background: ${({ theme }) => theme.color.gradient};
    color: ${({ theme }) => theme.color.background};
  }
`;
