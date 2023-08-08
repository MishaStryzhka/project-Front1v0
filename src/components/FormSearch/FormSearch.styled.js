import styled from 'styled-components';

export const StuledInput = styled.input`
  color: ${({ theme }) => theme.color.primary};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  //   justify-content: center;
  //   align-items: center;

  box-sizing: border-box;
  height: 40px;
  padding: 10px 20px;

  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.primary};

  background-color: transparent;

  box-shadow: ${({ theme }) => theme.boxShadow};

  :focus-visible {
    box-shadow: ${({ theme }) => theme.boxShadowHover};
    border: 2px solid ${({ theme }) => theme.color.primary};
    outline: none;
    outline-color: red;
  }
`;

export const Wrap = styled.div`
  //   margin-top: 24px;
  //   width: 100%;
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
