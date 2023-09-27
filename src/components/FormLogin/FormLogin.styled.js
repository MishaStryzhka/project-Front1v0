import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const ImputWrap = styled.div`
  // padding-top: 26px;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FieldStyled = styled(Field)`
  ${({ disabled }) => disabled && 'pointer-events: none;'}
  display: block;

  position: relative;

  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.64px;

  padding: 15px;
  width: 800px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 10px;

  border: 2px solid
    ${({ theme, error }) => (error ? theme.color.error : theme.color.main)};
  outline: none;

  color: ${({ theme }) => theme.color.btnLogOut};

  background-color: ${({ theme }) => theme.color.primary} !important;
`;

export const LabelCheckboxStyled = styled.label`
  display: flex;
  column-gap: 20px;
  padding-top: 22px;

  // background-color: red;
`;

export const FieldCheckboxStyled = styled(Field)`
  // height: 20px;
  // width: 20px;
  // background: url('unchecked.png') no-repeat left center;
  display: none;
`;

export const Label = styled.label`
  position: relative;
`;

export const Button = styled.button`
  cursor: pointer;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  align-items: center;

  padding: 18px 36px;
  height: 57px;
  box-sizing: border-box;

  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.color.secondaryMain};

  border: 3px solid ${({ theme }) => theme.color.secondaryMain};
  border-radius: 10px;
`;

export const StyledRefreshPassword = styled(NavLink)`
  width: 800px;
  padding-top: 20px;

  color: ${({ theme }) => theme.color.main};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    text-decoration-line: underline;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  align-items: center;

  padding: 18px 36px;
  height: 57px;
  box-sizing: border-box;

  color: ${({ theme }) => theme.color.secondary};

  border: 3px solid ${({ theme }) => theme.color.secondaryMain};
  border-radius: 10px;
`;

export const TextError = styled.p`
  color: ${({ theme }) => theme.color.error};
  margin-top: 4px;
  margin-left: 16px;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
`;

export const TextCheckbox = styled.span`
  color: ${({ theme }) => theme.color.main};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
`;
