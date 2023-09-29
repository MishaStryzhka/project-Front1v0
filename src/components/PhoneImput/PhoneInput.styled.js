import PhoneInput from 'react-phone-number-input';
import { styled } from 'styled-components';

export const StyledPhoneInput = styled(PhoneInput)`
  ${({ disabled }) => disabled && 'pointer-events: none;'}
  display: flex;

  overflow: hidden;

  position: relative;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.64px;

  padding-left: 15px;
  width: ${({ width }) => width};
  height: 50px;
  box-sizing: border-box;
  border-radius: 10px;

  border: 2px solid
    ${({ theme, error }) => (error ? theme.color.error : theme.color.main)};
  outline: none;

  > .PhoneInputInput {
    padding: 0;
    padding-left: 3.3px;

    height: 100%;

    color: ${({ theme, value }) => (value ? theme.color.secondary : '#adadad')};

    font-family: Rubik;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;

    border: 0;

    outline: none;

    &:focus-visible {
      // border: ;
    }
  }
`;
