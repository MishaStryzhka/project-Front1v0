import { StyledMainContent } from './MainContent.styled';

const MainContent = ({ children, width, className }) => {
  return (
    <StyledMainContent className={className} width={width}>
      {children}
    </StyledMainContent>
  );
};

export default MainContent;
