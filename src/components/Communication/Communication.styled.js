import { Field } from 'formik';
import { styled } from 'styled-components';

export const CommunicationWrap = styled.div`
  width: 100%;
`;

export const StyledLegend = styled.legend`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  text-align: end;

  > span {
    color: ${({ theme }) => theme.color.text};
  }
`;

export const CommunicationWithDoctorLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HowApplicationsAreReceivedLabel = styled.label`
  margin-top: 40px;
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr;
`;
