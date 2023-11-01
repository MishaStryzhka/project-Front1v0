import styled from 'styled-components';

export const WrapperAboutProblem = styled.div`
  //   margin-top: 40px;
`;

export const ImageProblem = styled.img`
  width: 300px;
  float: left;
  margin-right: 40px;
  //   margin-bottom: 40px;
`;

export const DescriptionProblem = styled.p`
  color: ${({ theme }) => theme.color.text};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  //   text-indent: 40px;
`;
