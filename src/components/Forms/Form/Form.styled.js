import { Form } from 'formik';
import { styled } from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BtnBox = styled.div`
  padding-top: 80px;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
