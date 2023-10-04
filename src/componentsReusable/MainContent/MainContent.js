import { StyledMainContent } from './MainContent.styled';

const MainContent = ({ children, width, $padding, className }) => {
  return (
    <StyledMainContent className={className} width={width} $padding={$padding}>
      {children}
    </StyledMainContent>
  );
};

export default MainContent;
