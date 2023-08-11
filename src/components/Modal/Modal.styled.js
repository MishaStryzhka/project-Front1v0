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
  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1200;
`;

export const CloseWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const ModalContainer = styled.div`
  background-color: ${p => p.theme.color.primary};
  min-width: 500px;
  /* height: 300px; */
  padding: 14px;
  margin: 0 auto;
  border-radius: 20px;
  z-index: 2000;
  //   @media screen and (min-width: 768px) {
  //     width: 580px;
  //     /* height: 326px; */
  //   }
`;
export const BtnStyled = styled.button`
  //   width: 100%;
  cursor: pointer;
`;
