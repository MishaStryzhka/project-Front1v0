import { styled } from 'styled-components';

export const StyledSideBarPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  // height: max-content;
  width: 380px;
  box-sizing: border-box;
  /* padding: 40px 50px; */
  padding: 20px;
  border-radius: 20px;

  transition: height 5s;

  background: ${({ theme }) => theme.color.background1};
`;
