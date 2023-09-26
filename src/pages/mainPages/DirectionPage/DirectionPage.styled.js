import InputRadio from 'componentsReusable/Inputs/InputRadio/InputRadio';
import Pagination from 'componentsReusable/Pagination/Pagination';
import { styled } from 'styled-components';

export const StyledInputRadio = styled(InputRadio)`
  margin-top: 60px;
  margin-left: auto;
`;

export const DoctorsBox = styled.ul`
  padding-top: 20px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
`;

export const DoctorsItem = styled.li`
  width: 180px;
  height: 240px;
  padding: 10px;
  box-sizing: border-box;

  border-radius: 10px;
  border: 2px solid var(--Black, #000);
`;

export const DoctorsAvatars = styled.img`
  width: 60px;
  height: 80px;

  background: #d9d9d9;
`;

export const StyledPagination = styled(Pagination)`
  margin: 34px 0 0 auto;
`;
