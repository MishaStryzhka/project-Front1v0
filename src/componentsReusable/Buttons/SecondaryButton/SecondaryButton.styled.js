import { styled } from 'styled-components';

export const Button = styled.button`
  cursor: ${({ disabled }) => !disabled && 'pointer'};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: max-content;
  padding: 18px 32px;

  border-radius: 20px;

  background: ${({ theme, disabled, $styledType }) =>
    disabled
      ? theme.color.disable
      : $styledType === 'green'
      ? theme.color.secondaryColor
      : theme.color.CTA};

  color: ${({ theme }) => theme.color.secondary};
  text-align: center;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    background: ${({ theme, $styledType }) =>
      $styledType === 'green'
        ? theme.color.secondaryColorHover
        : theme.color.CTAHover};
  }
  &:focus {
    background: ${({ theme, $styledType }) =>
      $styledType === 'green'
        ? theme.color.secondaryColorPressed
        : theme.color.CTAPressed};
  }
`;
