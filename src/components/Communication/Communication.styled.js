import { Field } from 'formik';
import { styled } from 'styled-components';

export const CommunicationWrap = styled.div`
  width: max-content;
  margin-top: 40px;
`;

export const StyledLegend = styled.legend`
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  > span {
    color: red;
  }
`;

export const CommunicationWithDoctorLabel = styled.label`
  display: flex;
  gap: 50px;
`;

export const ListCommunication = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export const HowApplicationsAreReceivedLabel = styled.label`
  margin-top: 40px;
  display: flex;
  gap: 50px;
  justify-content: flex-end;
`;
