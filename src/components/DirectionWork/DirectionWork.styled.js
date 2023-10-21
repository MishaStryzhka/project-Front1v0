import { Field, Form } from 'formik';
import { styled } from 'styled-components';

export const FormDirectionWork = styled(Form)`
  padding: 40px 0;
`;

export const ListProblems = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 40px;
`;

export const Label = styled.div`
  // margin-top: 40px;
`;

export const DirectionOfWorkLabel = styled(Label)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledLegend = styled.legend`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ListDirection = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 40px;
`;

export const CheckboxInputItem = styled.li`
  display: flex;
  column-gap: 20px;
`;

export const CheckboxField = styled(Field)`
  display: none;
`;

export const CheckboxLabel = styled.label`
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProblemsItSolvesLabel = styled(Label)``;
