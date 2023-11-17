import InputRadio from 'componentsReusable/Inputs/InputRadio/InputRadio';
import Pagination from 'componentsReusable/Pagination/Pagination';
import { styled } from 'styled-components';

export const StyledInputRadio = styled(InputRadio)`
  // margin-top: 60px;
  margin-left: auto;
`;

export const DoctorsBox = styled.ul`
  // padding-top: 20px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const DoctorsItem = styled.li`
  // width: 180px;
  height: 330px;
  padding: 20px 10px;
  box-sizing: border-box;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const DoctorsAvatars = styled.img`
  width: 90px;
  height: 120px;

  border-radius: 5px;

  margin: auto;

  background: #d9d9d9;
`;

export const StyledPagination = styled(Pagination)`
  margin-left: auto;
`;
