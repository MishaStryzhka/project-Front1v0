import { Field } from 'formik';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const InputRadioBox = styled.div`
  position: relative;

  width: ${({ width }) => width}px;
`;

export const ToggleBtn = styled.button`
  position: absolute;
  top: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  cursor: pointer;
  ${({ $isOpenMenu }) => $isOpenMenu && 'transform: rotate(180deg)'};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  > svg {
    pointer-events: none;
  }

  ${({ type }) => {
    if (type === 'normal') {
      return `
      width: 40px;
      height: 40px;

      right: 0;
    `;
    } else if (type === 'min') {
      return `
      width: 10px;
      height: 10px;

      right: 5px;
      `;
    }
  }}
`;

export const ListBox = styled.div`
  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  box-sizing: border-box;
  width: 100%;

  transform: scale(1, 1);
  padding: 25px 15px 15px 15px;
  border-radius: 10px;

  border: 1px solid ${({ theme }) => theme.color.main};

  color: ${({ theme }) => theme.color.btnLogOut};
  background-color: ${({ theme }) => theme.color.primary};

  ${({ $isOpenMenu }) => !$isOpenMenu && 'transform: scale(1, 0)'};
  transform-origin: top;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Item = styled.li`
  list-style: none;

  // text-overflow: ellipsis;
  // overflow: hidden;

  // height: 21px;
`;

export const ItemField = styled(Field)`
  display: none;
`;

export const ItemLabel = styled.label`
  color: ${({ theme, $active }) =>
    $active ? theme.color.main : theme.color.secondary};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  white-space: nowrap;

  cursor: pointer;

  border-bottom: 1px solid ${({ theme }) => theme.color.main};
`;

export const StyledBtn = styled.button`
  color: ${({ theme, $active }) =>
    $active ? theme.color.main : theme.color.secondary};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  max-width: 100%;

  text-overflow: ellipsis;
  overflow: hidden;

  white-space: nowrap;

  cursor: pointer;

  border-bottom: 1px solid
    ${({ theme, $active }) => ($active ? theme.color.main : 'none')};
`;

export const StyledInputRadio = styled.p`
  display: block;

  position: relative;

  ${({ type }) => {
    if (type === 'normal') {
      return `
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.64px;
  
    padding: 15px 25px 15px 15px;
  
    height: 50px;
    border-radius: 10px;
    `;
    } else if (type === 'min') {
      return `
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
      
    padding: 0 10px;
      
    height: 20px;
    border-radius: 5px;
      `;
    }
  }}

  width: ${({ width }) => width}px;
  box-sizing: border-box;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.color.error : theme.color.main)};
  outline: none;

  color: ${({ theme }) => theme.color.btnLogOut};
  background-color: ${({ theme }) => theme.color.primary};

  text-overflow: ellipsis;
  overflow: hidden;

  white-space: nowrap;
`;
