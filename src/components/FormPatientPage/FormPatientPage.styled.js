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
