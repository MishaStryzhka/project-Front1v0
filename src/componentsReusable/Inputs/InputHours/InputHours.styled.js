import { Field } from 'formik';
import styled from 'styled-components';

export const InputDateBox = styled.div`
  position: relative;

  width: ${({ width }) => width};

  ${({ disabled }) => disabled && 'pointer-events: none;'}
`;

export const InputWrap = styled.div`
  padding: 15px;
  width: 300px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid #396dff;
  ${({ disabled, theme }) =>
    disabled &&
    `border-color: ${theme.color.card};
  color: ${theme.color.card};`}
  outline: none;
  max-height: 75vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-right: 100px;
`;

export const StyledInputTime = styled(Field)`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border: none;

  outline: none;

  ${({ disabled, theme }) => disabled && `color: ${theme.color.card};`}

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const WrapInputHiden = styled.div`
  //   width: 45px;
  //   overflow: hidden;
`;
