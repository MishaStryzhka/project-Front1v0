import { StyledMainContent } from './MainContent.styled';

const MainContent = ({ children, width, $padding, className, style }) => {
  return (
    <StyledMainContent
      className={className}
      style={style}
      width={width}
      $padding={$padding}
    >
      {children}
    </StyledMainContent>
  );
};

export default MainContent;
