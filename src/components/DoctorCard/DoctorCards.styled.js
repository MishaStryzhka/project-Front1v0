import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  position: relative;
  gap: 80px;

  background-color: ${({ theme }) => theme.color.primary};
`;

export const WrapDescription = styled.div`
  margin-left: 320px;
`;

export const TitleDescription = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  line-height: normal;
  font-size: 20px;
  position: absolute;
  right: 660px;

  color: ${({ theme }) => theme.color.main};
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  font-weight: 400;
  max-width: 280px;

  /* margin-right: 160px; */

  color: ${({ theme }) => theme.color.text};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-left: 320px;
`;
export const ItemProblems = styled.ul`
  display: flex;
  align-items: center;
  /* gap: 160px; */
  justify-content: space-between;
  margin-left: 320px;
`;
export const ListProblems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const WrapSocialLink = styled.div`
  margin-left: 320px;
  display: flex;
  gap: 40px;
`;
export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  font-weight: 400;
  margin-left: 760px;

  color: ${({ theme }) => theme.color.main};
`;
