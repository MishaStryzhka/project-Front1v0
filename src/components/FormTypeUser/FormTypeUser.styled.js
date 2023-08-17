import { Form } from 'formik';
import { styled } from 'styled-components';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.secondary};
  text-align: center;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
