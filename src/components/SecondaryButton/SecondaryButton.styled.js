import { styled } from 'styled-components';

export const Button = styled.button`
  cursor: ${({ disabled }) => !disabled && 'pointer'};

  display: flex;
  padding: 18px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 10px;

  border: 3px solid
    ${({ theme, disabled }) =>
      disabled ? theme.color.card : theme.color.secondaryMain};

  color: ${({ theme }) => theme.color.secondary};
  text-align: center;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
