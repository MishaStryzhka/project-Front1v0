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
  background-color: ${p => p.theme.color.background};
  min-width: 500px;

  padding: 14px;
  margin: 0 auto;
  border-radius: 20px;

  position: relative;
  width: 800px;
  padding: 80px 100px;
`;

export const ModalContentContainer = styled.div`
  width: 800px;
  padding: 80px 100px;
`;

export const BtnClose = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;

  cursor: pointer;
`;
