import { Field, Form } from 'formik';
import { styled } from 'styled-components';

export const FormStyledPatient = styled(Form)`
  padding: 40px 0;
`;

export const FormDescription = styled.p`
  width: 800px;

  color: ${({ theme }) => theme.color.placeholder};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;

  &::after {
    display: none;
    ${({ required }) => required && 'display: initial;'}
    content: '*';
    color: ${({ theme }) => theme.color.error};
  }
`;

export const Placeholder = styled.p`
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
    ${({ required }) => required && 'display: initial;'}
    content: '*';
    color: ${({ theme }) => theme.color.error};
  }
`;

export const ButtonRefresh = styled.button`
  cursor: pointer;

  padding-top: 10px;

  color: ${({ theme, disabled }) =>
    disabled ? theme.color.placeholder : theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    ${({ disabled }) => !disabled && 'text-decoration-line: underline'};
  }
`;

export const WrapPhone = styled.div``;
export const WrapPhoneInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const ContactMethodLabel = styled.div`
  display: flex;
  column-gap: 40px;
`;

export const StyledLegend = styled.legend`
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const RadioInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const WrapInputRadio = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const RadioLabel = styled.label`
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledField = styled(Field)`
  display: none;
`;

export const ButtonWrapper = styled.div`
  padding-top: 80px;

  width: 800px;

  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  display: flex;
  column-gap: 40px;
  align-items: center;

  color: ${({ theme }) => theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    cursor: pointer;
  }
`;
