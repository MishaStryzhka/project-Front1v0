import { Field } from 'formik';
import { styled } from 'styled-components';

export const StyledField = styled(Field)`
  ${({ disabled }) => disabled && 'pointer-events: none;'}
  display: block;

  position: relative;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.64px;

  padding: 15px;
  width: ${({ width }) => width};
  height: 50px;
  box-sizing: border-box;
  border-radius: 10px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.color.error : theme.color.main)};
  outline: none;

  color: ${({ theme }) => theme.color.btnLogOut};
  ${({ $style }) => $style && $style}
`;

export const Placeholder = styled.div`
  display: flex;
  ${e => {
    // console.log('e', e);
    return e?.type?.name === 'phones' && 'margin-left: 44px;';
  }}
  color: ${({ theme }) => theme.color.placeholder};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;

  pointer-events: none;
  white-space: nowrap;

  position: absolute;
  top: 15px;
  left: ${({ type }) => (type === 'tel' ? '61px' : '17px')};

  &::after {
    display: none;
    ${({ required }) => required && 'display: block;'}
    content: ' *';
    color: red;
  }
`;

export const TextError = styled.p`
  color: ${({ theme }) => theme.color.error};
  margin-top: 4px;
  margin-left: 16px;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
`;
