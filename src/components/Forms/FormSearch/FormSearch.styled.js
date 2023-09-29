import styled from 'styled-components';

export const StuledInput = styled.input`
  color: ${({ theme }) => theme.color.primary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  outline: none;

  box-sizing: border-box;
  width: 300px;
  height: 40px;
  padding: 10px 20px;

  border-radius: 50px;
  border: 2px solid #9bb8ff;

  background-color: transparent;

  box-shadow: ${({ theme }) => theme.boxShadow};

  &:focus-visible {
    box-shadow: ${({ theme }) => theme.boxShadowHover};
    border: 3px solid ${({ theme }) => theme.color.primary} !important;
  }
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    // width: 608px;
    // margin-top: 40px;
  }
`;

export const IconWrap = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;

  position: absolute;
  top: 10px;
  right: 10px;
`;
