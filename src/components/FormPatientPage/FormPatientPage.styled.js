import { Field } from 'formik';
import { styled } from 'styled-components';

export const FormStyledPatient = styled.form`
  padding-top: 40px;
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

export const Placeholder = styled.p`
  color: ${({ theme }) => theme.color.placeholder};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;

  pointer-events: none;

  position: absolute;
  top: 15px;
  left: ${({ type }) => (type === 'tel' ? '61px' : '17px')};

  > span {
    color: red;
  }
`;

export const ButtonRefresh = styled.button`
  padding-top: 10px;

  color: ${({ theme }) => theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    text-decoration-line: underline;
  }
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
`;
