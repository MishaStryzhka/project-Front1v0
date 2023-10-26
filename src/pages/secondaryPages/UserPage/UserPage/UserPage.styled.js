import styled from 'styled-components';

export const StyledPageContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  gap: 20px;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 20px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;

  box-sizing: border-box;
  padding: 40px 50px;
  border-radius: 20px;

  background: ${({ theme }) => theme.color.background1};
`;

export const MainContainer = styled.div`
  display: flex;

  gap: 40px;
  height: 100%;
  box-sizing: border-box;
`;
