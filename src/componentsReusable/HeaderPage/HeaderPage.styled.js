import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;

  box-sizing: border-box;
  padding: 40px 50px;
  border-radius: 20px;

  background: ${({ theme }) => theme.color.background1};
`;

export const BackButton = styled.button`
  position: absolute;
  left: 55px;

  color: var(--Text, #00185c);
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  & spam {
    text-decoration-line: underline;
  }
`;
