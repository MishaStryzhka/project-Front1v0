import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-top: 75px;
  margin: auto;
  width: 800px;
`;

export const ImputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FieldStyled = styled(Field)`
  display: block;

  position: relative;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.64px;

  padding: 15px;
  width: 800px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 10px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.color.error : theme.color.main)};
  outline: none;

  color: ${({ theme }) => theme.color.btnLogOut};
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

export const Text = styled.p`
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;

  color: #888;
`;

export const TextError = styled.p`
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
  color: ${({ theme }) => theme.color.error};
  margin-top: 4px;
  margin-left: 16px;
`;

export const SuccessText = styled.div`
  margin-top: 4px;
  margin-left: 16px;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
  color: ${({ theme }) => theme.color.indicator};
`;

export const WrapIcons = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
  display: flex;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 15px;
  }
`;
