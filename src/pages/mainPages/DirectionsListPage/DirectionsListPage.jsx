import { Helmet } from 'react-helmet';
import { StyledContainer, StyledTitle } from './DirectionsListPage.styled';
import NavList from 'componentsReusable/NavLIst/NavList';
import { directionListValue } from 'helpers/directionsList';

const DirectionsListPage = () => {
  return (
    <>
      <Helmet>
        <title>Спеціалісти</title>
      </Helmet>

      <StyledContainer>
        <StyledTitle>Оберіть напрямок спеціаліста</StyledTitle>

        <NavList name="direction" list={directionListValue} />
      </StyledContainer>
    </>
  );
};

export default DirectionsListPage;
