import { Placeholder } from 'components/Forms/FormPersonalDataPatient/FormPersonalDataPatient.styled';
import styled from 'styled-components';

export const InputCalendarBox = styled.div`
  position: relative;

  width: ${({ width }) => width};
`;

export const StyledPlaceholder = styled(Placeholder)`
  left: 115px;
`;

export const ToggleBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  cursor: pointer;

  background-color: ${({ theme }) => theme.color.primary};

  > svg {
    pointer-events: none;
  }
`;

export const WrapScroll = styled.div`
  position: absolute;

  box-sizing: border-box;
  width: 100%;
  padding: 2px 1px;

  overflow: hidden;

  transform: scale(1, 1);
  max-height: 300px;

  border: 2px solid ${({ theme }) => theme.color.main};

  color: ${({ theme }) => theme.color.btnLogOut};
  background-color: ${({ theme }) => theme.color.background1};

  ${({ $isOpenMenu }) =>
    !$isOpenMenu && 'transform: scale(1, 0); max-height: 0'};
  transform-origin: top;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
    max-height 500ms cubic-bezier(0.4, 0, 0.2, 1);

  z-index: 1;

  border-radius: 10px;
`;

export const ScrollBox = styled.div`
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
  //   gap: 10px;

  padding: 1px;
`;
