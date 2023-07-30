import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ isOpenMenu }) =>
    isOpenMenu
      ? `
         display: flex;
         align-items: center;
         gap: 12px;
         margin-top: 82px;
         padding: 8px 16px;
        `
      : `
         display: flex;
         align-items: center;
         `}

  @media screen and (min-width: 768px) {
    gap: 12px;
  }

  @media screen and (min-width: 1280px) {
    gap: 12px;
  }
`;

export const UserName = styled.p`
  ${({ isOpenMenu }) => !isOpenMenu && `display: none;`}
  color: ${({ dark, theme }) =>
    dark === 'true' ? theme.color.background : theme.color.primary};

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1280px) {
    // width: 1280px;
    display: flex;
  }
`;
