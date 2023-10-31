import { ButtonWrapper } from 'components/AccountData/AccountData.styled';
import { styled } from 'styled-components';

export const StyledButtonWrapper = styled(ButtonWrapper)`
  ${({ $userType }) =>
    $userType === 'doctor'
      ? 'justify-content: space-around; width: 980px;'
      : 'justify-content: flex-end; width: 800px;'}
`;

export const Notify = styled.p`
  position: fixed;
  right: 0;
  top: 5px;

  height: 40px;
  padding: 0 20px;
  border-radius: 20px 0 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  background-color: ${({ theme }) => theme.color.secondaryColor};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;

  transform: translateX(200px);
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $show }) => $show && 'transform: translateX(0px);'}
`;
