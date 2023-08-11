import { styled } from 'styled-components';

export const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: ${({ value }) => (value ? 'flex-start' : 'flex-end')};
  //   transition: justify-content 250ms cubic-bezier(0.4, 0, 0.2, 1);

  width: 75px;
  height: 30px;
  padding: 0 1.5px;

  border-radius: 15px;
  border: 1px solid black;
`;

export const Toggle = styled.div`
  transform: ${({ value }) => (value ? 'translateX(0px)' : 'translateX(48px)')};
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 26px;
  height: 26px;
  background: ${({ theme }) => theme.color.main};
  border-radius: 15px;
`;
