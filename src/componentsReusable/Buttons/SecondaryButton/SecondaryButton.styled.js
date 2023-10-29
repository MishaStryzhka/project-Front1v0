import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Button = styled(({ type, ...props }) =>
  type === 'navLink' ? (
    <NavLink {...props} />
  ) : (
    <button type={type} {...props} />
  )
)`
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

  ${({ disabled, theme, $styledType }) =>
    !disabled &&
    `&:hover {
    background: ${
      $styledType === 'green'
        ? theme.color.secondaryColorHover
        : theme.color.CTAHover
    };
  }
  &:focus {
    background: ${
      $styledType === 'green'
        ? theme.color.secondaryColorPressed
        : theme.color.CTAPressed
    };
  }`}
`;
