import PrimaryButton from 'components/PrimaryButton/PrimaryButton';
import { Form } from 'formik';
import { styled } from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FormDescription = styled.p`
  width: 800px;

  color: ${({ theme }) => theme.color.placeholder};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;

  > span {
    color: red;
  }
`;

export const BtnBox = styled.div`
  padding-top: 80px;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
  margin-left: auto;
`;
