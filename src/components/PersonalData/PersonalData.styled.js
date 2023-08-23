import { BtnBox } from 'components/AccountData/AccountData.styled';
import { Field, Form } from 'formik';
import { styled } from 'styled-components';

export const FormPersonalData = styled(Form)`
  padding: 40px 0;
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

export const AvatarLabel = styled.div`
  display: flex;
  column-gap: 40px;
`;

export const AvaterInputLabel = styled.label`
  cursor: pointer;

  color: ${({ theme, disabled }) =>
    disabled ? theme.color.placeholder : theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    ${({ disabled }) => !disabled && 'text-decoration-line: underline'};
  }
`;

export const AvatarWrap = styled.div`
  width: 150px;
  height: 200px;

  border: 1px dashed var(--black, ${({ theme }) => theme.color.secondary});
  background: ${({ theme }) => theme.color.btnLight};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PhotoDescription = styled.p`
  color: ${({ theme }) => theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Avatar = styled.img``;

export const AvatarDescription = styled.p`
  margin-top: 20px;

  color: ${({ theme }) => theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
`;

export const InputWrap = styled.div`
  padding-top: 26px;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Label = styled.div`
  position: relative;
`;

export const FieldStyled = styled(Field)`
  ${({ disabled }) => disabled && 'pointer-events: none;'}
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

export const Placeholder = styled.p`
  color: ${({ theme }) => theme.color.placeholder};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;

  pointer-events: none;
  white-space: nowrap;

  position: absolute;
  top: 15px;
  left: ${({ type }) => (type === 'tel' ? '61px' : '17px')};

  > span {
    color: red;
  }
`;

export const WrapPhone = styled.div``;

export const WrapPhoneInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const ButtonRefresh = styled.button`
  cursor: pointer;

  padding-top: 10px;

  color: ${({ theme, disabled }) =>
    disabled ? theme.color.placeholder : theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    ${({ disabled }) => !disabled && 'text-decoration-line: underline'};
  }
`;

export const PayMethodLabel = styled.div`
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

export const CheckboxWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const CheckboxInputWrap = styled.div`
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

export const YearsWrap = styled.div`
  margin-top: 20px;
  display: flex;
  column-gap: 40px;
  align-items: center;
`;

export const WrapEducation = styled.div``;

export const WrapEducationInputs = styled.div`
  display: flex;
  row-gap: 40px;
  flex-direction: column;
`;

export const StyledBtnBox = styled(BtnBox)`
  margin-top: 80px;
`;
