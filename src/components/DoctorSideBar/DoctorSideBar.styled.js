import { styled } from 'styled-components';

export const WrapAvatar = styled.picture`
  display: block;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  border: 1px dashed rgba(0, 24, 92, 1);
  background-color: rgba(229, 232, 239, 1);
  overflow: hidden;
`;

export const BoxSertificate = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 15px;
  margin-bottom: 20px;
`;

export const WrapSertificate = styled.picture`
  display: block;
  /* width: 140px; */
  width: calc((100% - 20px) / 2);
  height: 140px;
  border-radius: 20px;
  border: 1px dashed rgba(0, 24, 92, 1);
  background-color: rgba(229, 232, 239, 1);
  overflow: hidden;
`;

export const Button = styled.button`
  font-family: 'Rubik', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;

  width: 214px;
  height: 92px;
  padding: 18px 32px;
  margin: 0 auto;
  background-color: rgba(222, 255, 217, 1);
  border-radius: 20px;
  cursor: pointer;
`;
