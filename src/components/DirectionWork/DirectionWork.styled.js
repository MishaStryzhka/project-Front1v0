import { Field, Form } from 'formik';
import { styled } from 'styled-components';

export const FormDirectionWork = styled(Form)`
  padding: 40px 0;
`;

export const ListProblemsCategories = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export const ListProblems = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
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
`;

export const CheckboxInputItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const CheckboxProblemItem = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
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

export const ProblemsItSolvesLabel = styled(Label)`
  width: 100%;
`;

export const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.color.text};

  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InputPrice = styled(Field)`
  ${({ disabled }) => disabled && 'pointer-events: none;'}
  display: block;

  position: relative;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.64px;

  padding: 15px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-sizing: border-box;
  border-radius: 10px;

  border: 2px solid
    ${({ theme, error }) => (error ? theme.color.error : theme.color.main)};
  outline: none;

  color: ${({ theme }) => theme.color.text};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
`;
