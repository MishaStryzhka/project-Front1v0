import styled from 'styled-components';

export const AddressList = styled.ul`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.64px;

  background-color: ${({ theme }) => theme.color.primary};

  position: absolute;
  width: ${({ width }) => width};
  box-sizing: border-box;
  overflow: hidden;

  border: 2px solid ${({ theme }) => theme.color.main};
  border-radius: 10px;

  z-index: 1;
`;

export const AddressListItem = styled.li`
  cursor: pointer;
  padding: 5px 15px;
  &:hover {
    background-color: ${({ theme }) => theme.color.secondaryColor};
  }
`;
