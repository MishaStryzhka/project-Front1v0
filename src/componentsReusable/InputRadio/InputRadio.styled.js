import { Field } from 'formik';
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

  ${({ $styledtype }) => {
    if ($styledtype === 'normal') {
      return `
      width: 40px;
      height: 40px;

      right: 0;
    `;
    } else if ($styledtype === 'min') {
      return `
      width: 10px;
      height:10px;

      right: 5px;
      `;
    }
  }}
`;

export const WrapScroll = styled.div`
  // position: absolute;

  box-sizing: border-box;
  width: 100%;
  padding: 2px 1px;

  overflow: hidden;

  transform: scale(1, 1);
  max-height: 300px;

  border: 2px solid ${({ theme }) => theme.color.main};

  color: ${({ theme }) => theme.color.btnLogOut};
  background-color: ${({ theme }) => theme.color.primary};

  ${({ $isOpenMenu }) =>
    !$isOpenMenu && 'transform: scale(1, 0); max-height: 0'};
  transform-origin: top;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
    max-height 500ms cubic-bezier(0.4, 0, 0.2, 1);

  z-index: 1;

  ${({ $styledType }) => {
    if ($styledType === 'normal') {
      return `
    top: 50px;

    border-radius: 10px;
  `;
    } else if ($styledType === 'min') {
      return `
    position: absolute;

    top: 20px;

    border-radius: 5px;
    `;
    }
  }}
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  max-height: 300px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    height: 0px;
  }
  &::-webkit-scrollbar-track {
    // background: orange; /* color of the tracking area */
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 30px; /* roundness of the scroll thumb */
    cursor: pointer;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.color.main}50;
    }
  }

  ${({ $styledType }) => {
    if ($styledType === 'normal') {
      return `
    gap: 10px;

    padding: 13px 10px 13px 15px;

    border-radius: 15px;

  `;
    } else if ($styledType === 'min') {
      console.log('qwe');

      return `
    gap: 3px;

    padding: 10px;

    `;
    }
  }}
`;

export const Item = styled.li`
  list-style: none;

  display: flex;
`;

export const ItemField = styled(Field)`
  display: none;
`;

export const ItemLabel = styled.label`
  color: ${({ theme, $active }) =>
    $active ? theme.color.main : theme.color.secondary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-style: normal;
  font-weight: 400;

  white-space: nowrap;

  cursor: pointer;

  border-bottom: 1px solid ${({ theme }) => theme.color.main};
`;

export const StyledBtn = styled.button`
  color: ${({ theme, $active }) =>
    $active ? theme.color.main : theme.color.secondary};
  ${({ $styledType }) => {
    if ($styledType === 'normal') {
      return `
      font-size: 16px;
      `;
    } else if ($styledType === 'min') {
      return `
      font-size: 12px;
        `;
    }
  }}
  font-family: ${({ theme }) => theme.fontFamily};
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

  ${({ $styledType }) => {
    if ($styledType === 'normal') {
      return `
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.64px;
  
    padding: 15px 25px 15px 15px;
  
    height: 50px;
    border-radius: 10px;
    `;
    } else if ($styledType === 'min') {
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

  border: 2px solid
    ${({ theme, error }) => (error ? theme.color.error : theme.color.main)};
  outline: none;

  color: ${({ theme }) => theme.color.btnLogOut};
  background-color: ${({ theme }) => theme.color.primary};

  text-overflow: ellipsis;
  overflow: hidden;

  white-space: nowrap;

  // &::after {
  //   display: none;
  //   ${({ required }) => required && 'display: initial;'}
  //   content: '*';
  //   color: red;
  // }
`;
