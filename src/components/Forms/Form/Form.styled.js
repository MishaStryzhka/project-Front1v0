import { Form } from 'formik';
import { styled } from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding-top: 60px;
`;

export const FormDescription = styled.p`
  padding-top: 40px;

  color: ${({ theme }) => theme.color.text};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;

  > span {
    padding-right: 20px;
  }
`;
