import { Field } from 'formik';
import { styled } from 'styled-components';

export const LabelCheckboxStyled = styled.label`
  display: flex;
  justify-content: center;
  column-gap: 40px;
`;

export const FieldCheckboxStyled = styled(Field)``;

export const LabelCheckboxText = styled.span`
  color: ${({ theme, value }) =>
    value ? theme.color.secondary : theme.color.btn};
  text-align: center;
  align-self: center;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
