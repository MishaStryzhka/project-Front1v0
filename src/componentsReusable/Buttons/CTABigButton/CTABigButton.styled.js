import styled from 'styled-components';

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.color.text};
  font-family: Rubik;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  // width: 280px;
  // height: 120px;
  padding: 40px;
  justify-content: center;
  align-items: center;

  border-radius: 80px;
  background: ${({ theme }) => theme.color.CTA};

  &:hover {
    background: ${({ theme }) => theme.color.CTAHover};
  }

  &:focus {
    background: ${({ theme }) => theme.color.CTAPressed};
  }

  ${({ disabled, theme }) => disabled && `background: ${theme.color.disable}`};
`;
