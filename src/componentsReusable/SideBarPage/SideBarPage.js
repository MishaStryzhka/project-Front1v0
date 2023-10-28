import { StyledSideBarPage } from './SideBarPage.styled';

const SideBarPage = ({ children }) => {
  return (
    <div style={{ width: '380px' }}>
      <StyledSideBarPage>{children}</StyledSideBarPage>
    </div>
  );
};

export default SideBarPage;
