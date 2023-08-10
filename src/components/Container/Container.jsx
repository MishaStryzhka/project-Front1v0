import { StyledContainer } from './Container.styled';

const Container = ({ className, children }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
