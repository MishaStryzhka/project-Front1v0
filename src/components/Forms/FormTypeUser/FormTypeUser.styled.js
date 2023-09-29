import { LabelCheckbox } from 'components/Forms/FormLogin/FormLogin.styled';
import { Form } from 'formik';
import { styled } from 'styled-components';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
  padding-top: 0px;
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

export const StyledLabelCheckbox = styled(LabelCheckbox)`
  padding-top: 0;
`;
