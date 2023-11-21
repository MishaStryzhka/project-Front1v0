import { keyframes, styled } from 'styled-components';

export const LoaderWraper = styled.div`
  background-image: url(${({ $urlImage }) => $urlImage});
  background-size: cover;
  overflow: hidden;

  display: flex;
  position: relative;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  margin: auto;
`;

const rotate = keyframes`
to {
    transform: rotate(1turn);
 }
`;

export const Spinner = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 50%;
  background: conic-gradient(
    ${({ $colorParent }) => $colorParent || '#fff'} 0%,
    transparent
  );
  //   -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  animation: ${rotate} 1s infinite linear;
`;
