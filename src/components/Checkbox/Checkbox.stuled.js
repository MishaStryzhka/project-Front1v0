import { Field } from 'formik';
import { styled } from 'styled-components';

export const StyledLabel = styled.label`
  &:hover {
    cursor: pointer;
  }
`;

export const StyledField = styled(Field)`
  display: none;
`;
