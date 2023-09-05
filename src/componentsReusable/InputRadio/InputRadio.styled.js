import { Field } from 'formik';
import { styled } from 'styled-components';

export const InputRadioBox = styled.div`
  position: relative;
`;

export const ToggleBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  cursor: pointer;
  ${({ $isOpenMenu }) => $isOpenMenu && 'transform: rotate(180deg)'};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
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

  text-overflow: ellipsis;
  overflow: hidden;

  height: 21px;
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
