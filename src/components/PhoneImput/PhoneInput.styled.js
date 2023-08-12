import PhoneInput from 'react-phone-number-input';
import { styled } from 'styled-components';

export const StyledPhoneInput = styled(PhoneInput)`
  ${({ disabled }) => disabled && 'pointer-events: none;'}
  display: block;

  position: relative;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.64px;

  padding: 15px;
  width: 800px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 10px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.color.error : theme.color.main)};
  outline: none;

  > .PhoneInputInput {
    color: ${({ theme, value }) => (value ? theme.color.secondary : '#adadad')};

    font-family: Rubik;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;

    border: 0;

    outline: none;

    &:focus-visible {
      border: 3px solid ${({ theme }) => theme.color.primary} !important;
    }
  }
`;
