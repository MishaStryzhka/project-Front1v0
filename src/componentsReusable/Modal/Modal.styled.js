import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.primary}80;
  backdrop-filter: blur(4px);
  z-index: 1200;
`;

export const CloseWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const ModalContainer = styled.div`
  width: 800px;
  border: 2px solid ${({ theme }) => theme.color.main};
  background: ${({ theme }) => theme.color.primary};

  padding: 14px;
  margin: 0 auto;
  border-radius: 20px;

  position: relative;
  padding: 80px 100px;

  max-height: 75vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 0px;
  }

  &::-webkit-scrollbar-track {
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
`;

export const ModalContentContainer = styled.div`
  width: 800px;
  padding: 80px 100px;
`;

export const WrapBtnClose = styled.div``;

export const BtnClose = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  border: 1px solid ${({ theme }) => theme.color.main};
  border-radius: 20px;

  cursor: pointer;
`;
