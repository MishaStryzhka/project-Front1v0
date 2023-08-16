import { styled } from 'styled-components';

export const TitleModal = styled.h2`
  color: ${({ theme }) => theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  text-align: center;
`;

export const FormRefreshEmail = styled.form``;

export const FormDescription = styled.p`
  color: ${({ theme }) => theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;

  padding-top: 10px;
`;

export const ButtonWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: flex-end;
`;
