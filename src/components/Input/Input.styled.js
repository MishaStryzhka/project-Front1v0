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
  height: ${({ height }) => height};
  box-sizing: border-box;
  border-radius: 10px;

  border: 2px solid
    ${({ theme, error }) => (error ? theme.color.error : theme.color.main)};
  outline: none;

  color: ${({ theme }) => theme.color.btnLogOut};
  ${({ $style }) => $style && $style}

  max-height: 75vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 0px;
  }

  &::-webkit-scrollbar-track {
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 30px; /* roundness of the scroll thumb */
    cursor: pointer;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.color.main}50;
    }
  }
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
    content:  '*';
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
