import { StyledTitle } from './TitleSection.styled';

const TitleSection = ({ children, className }) => {
  return <StyledTitle className={className}>{children}</StyledTitle>;
};

export default TitleSection;
