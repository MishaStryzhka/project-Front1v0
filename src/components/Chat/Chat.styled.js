import { ButtonWrapper } from 'components/Forms/FormPersonalDataPatient/FormPersonalDataPatient.styled';
import styled from 'styled-components';

export const LabelCheckbox = styled.label`
  display: flex;
  column-gap: 20px;
`;
export const TextCheckbox = styled.label`
  color: ${({ theme }) => theme.color.text};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;
`;

export const StyledButtonWrapper = styled(ButtonWrapper)`
  justify-content: flex-end;
`;
