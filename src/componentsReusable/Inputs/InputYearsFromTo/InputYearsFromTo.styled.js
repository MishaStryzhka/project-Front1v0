import { Field } from 'formik';
import styled from 'styled-components';

export const StyledInput = styled.div`
  ${({ disabled }) => disabled && `pointer-events: none;`}
  ${({ disabled, theme }) =>
    `background-color: ${
      disabled ? theme.color.background1 : theme.color.primary
    };`}
  display: flex;
  align-items: center;
  gap: 26px;

  position: relative;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.64px;

  padding: 15px;
  width: ${({ width }) => {
    return width;
  }};
  height: 50px;
  height: ${({ height }) => height};
  box-sizing: border-box;
  border-radius: 10px;

  border: 2px solid
    ${({ theme, error }) => (error ? theme.color.error : theme.color.main)};
  outline: none;

  color: ${({ theme }) => theme.color.text};
  ${({ $style }) => $style && $style}
`;

export const StyledField = styled(Field)`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.64px;

  color: ${({ theme }) => theme.color.text};
  background-color: transparent !important;

  //   text-align: center;

  width: 45px;

  border: none;
  padding: 0;

  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
