import { StyledTitle } from './Title.styled';

const Title = ({ children, className }) => {
  return <StyledTitle className={className}>{children}</StyledTitle>;
};

export default Title;
