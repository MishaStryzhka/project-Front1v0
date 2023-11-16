import { styled } from 'styled-components';

export const WrapAvatar = styled.picture`
  display: block;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  border: ${({ avatar }) =>
    avatar === '' ? '1px dashed rgba(0, 24, 92, 1)' : 'none'};
  background-color: ${({ theme }) => theme.color.backgroundPhoto};
  overflow: hidden;
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
`;

export const WrapSertificate = styled.picture`
  position: relative;
  display: block;
  width: calc((100% - 20px) / 2);
  height: 140px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.backgroundPhoto};
  overflow: hidden;
  border: ${({ certificate }) =>
    certificate ? 'none' : '1px dashed rgba(0, 24, 92, 1)'};
`;

export const Button = styled.button`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 24px;
  font-weight: 400;
  line-height: normal;

  width: 214px;
  height: 92px;
  padding: 18px 32px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.backgroundBtn};
  border-radius: 20px;
  cursor: pointer;
`;
export const Text = styled.p`
  position: absolute;
  top: 61px;
  left: 42px;
`;
